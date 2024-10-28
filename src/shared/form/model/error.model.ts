import { FieldErrors, FieldPath, FieldValues } from 'react-hook-form'

export const getError = <TFieldValues extends FieldValues>(
  name: FieldPath<TFieldValues>,
  errors: FieldErrors<TFieldValues>
) => {
  if (!Object.keys(errors).length) return undefined

  const error = name
    .split('.')
    .map((item) => item.replaceAll('[', '').replaceAll(']', ''))
    .reduce(
      (prev: object | string | undefined, curr) =>
        prev ? prev[curr as keyof typeof prev] : prev,
      errors
    ) as string

  return error
}
