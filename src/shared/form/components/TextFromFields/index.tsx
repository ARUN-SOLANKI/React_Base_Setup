import { TextField, TextFieldProps } from '@mui/material'
import {
  Controller,
  ControllerProps,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form'

type Props<TFormValues extends FieldValues> = Omit<
  TextFieldProps,
  keyof ControllerRenderProps
> &
  Omit<ControllerProps<TFormValues>, 'render'>

export function TextFormField<TFormValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...restTextFieldProps
}: Props<TFormValues>) {
  return (
    <Controller
      render={({ field }) => <TextField {...restTextFieldProps} {...field} />}
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  )
}
