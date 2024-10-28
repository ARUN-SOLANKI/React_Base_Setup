import { useMemo, useState } from 'react'

import { Primitive } from 'shared/typescript'

type FormFields = Record<string, Primitive>

type ValidationRules<T> = {
  [K in keyof T]?: {
    required?: boolean
    pattern?: RegExp
    validate?: (value: T[K], values: T) => boolean | string
  }
}

type ValidationErrors<T> = {
  [K in keyof T]?: string
}

type DirtyFields<T> = {
  [K in keyof T]?: boolean
}

type FormProps<T extends FormFields> = {
  initialValues: T
  validationRules?: ValidationRules<T>
}

export const useForm = <T extends FormFields>({
  initialValues,
  validationRules,
}: FormProps<T>) => {
  const [submittedTriggered, setSubmittedTriggered] = useState(false)
  const [dirtyField, setDirtyField] = useState<DirtyFields<T>>({})

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<ValidationErrors<T>>({})

  const validateField = (name: keyof T, value: T[keyof T]): string | null => {
    if (!validationRules) return null
    const rules = validationRules[name]

    if (rules?.required && !value) {
      return 'This field is required'
    }
    if (rules?.pattern && !rules.pattern.test(String(value))) {
      return 'Invalid format'
    }
    if (rules?.validate) {
      const validationResult = rules.validate(value, values)
      if (typeof validationResult === 'string') {
        return validationResult
      }
      if (!validationResult) {
        return 'Invalid value'
      }
    }
    return null
  }

  const isValid = useMemo(() => {
    return Object.entries(values).every(
      ([key, value]) => !validateField(key as keyof T, value as T[keyof T])
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const handleError = (name: keyof T) => {
    const error = validateField(name, values[name])

    setErrors({
      ...errors,
      [name]: error,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })

    if (submittedTriggered || dirtyField[name]) {
      handleError(name as keyof T)
    }
  }

  const setValue = (name: keyof T, value: T[keyof T]) => {
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit =
    (
      onSuccess: (formValues: T) => void,
      onError?: (errors: ValidationErrors<T>) => void
    ) =>
    (e: React.FormEvent) => {
      e.preventDefault()

      setSubmittedTriggered(true)

      const validationErrors: ValidationErrors<T> = {}
      let hasErrors = false

      // Validate all fields based on the rules
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const field in values) {
        const error = validateField(field as keyof T, values[field as keyof T])
        if (error) {
          validationErrors[field as keyof T] = error
          hasErrors = true
        }
      }

      if (hasErrors) {
        setErrors(validationErrors)
        onError?.(validationErrors)
      } else {
        onSuccess(values)
      }
    }

  const register = (name: keyof T) => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: () => {
      setDirtyField((prev) => ({
        ...prev,
        [name]: true,
      }))
      handleError(name)
    },
    error: !!errors[name],
    helperText: errors[name],
  })

  return {
    isValid,
    values,
    errors,
    handleSubmit,
    register,
    setValue,
  }
}
