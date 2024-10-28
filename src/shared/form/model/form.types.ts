export type FormFieldProps = {
  name: string
  onChange: (e: ChangeEventProps) => void
  value: string
}

export type ChangeEventProps = React.ChangeEvent<HTMLInputElement>

export type Option<TValue extends string = string> = {
  label: string
  value: TValue
}
