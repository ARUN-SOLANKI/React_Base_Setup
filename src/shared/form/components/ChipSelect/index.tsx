import { Box } from '@mui/material'

import { PromptBtn } from 'shared/styled-components'

import {
  ChangeEventProps,
  FormFieldProps,
  Option,
} from '../../model/form.types'

type ChipSelectProps = {
  options: Option[] | string[]
} & FormFieldProps

export function ChipSelect({
  options,
  onChange,
  value,
  name,
}: ChipSelectProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      {options.map((option) => {
        const isString = typeof option === 'string'
        const optionValue = isString ? option : option.value

        return (
          <PromptBtn
            key={optionValue}
            active={value === optionValue}
            onClick={() =>
              onChange({
                target: { value: optionValue, name },
              } as ChangeEventProps)
            }
          >
            {isString ? option : option.label}
          </PromptBtn>
        )
      })}
    </Box>
  )
}
