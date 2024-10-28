import { ReactNode, useState } from 'react'

import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  ToggleButtonProps,
} from '@mui/material'

import { Icon, IconProps, IconType } from 'shared/icons'

type DefaultToggleButtonProps = Omit<ToggleButtonProps, 'value' | 'children'>

export type ToggleOption<
  TValue extends string,
  TIcon extends IconType = 'outline',
> = {
  value: TValue
  icon?: IconProps<TIcon>
  label?: ToggleButtonProps['children']
} & DefaultToggleButtonProps

export type ToggleBtnHOCProps<
  TValue extends string,
  TIcon extends IconType = 'outline',
> = {
  initialValue?: TValue
  toggleOptions: ToggleOption<TValue, TIcon>[]
  toggleBtnProps?: DefaultToggleButtonProps
  panelMapping?: Record<TValue, ReactNode>
  renderPanel?: (props: { value: TValue }) => React.ReactNode
} & ToggleButtonGroupProps

export function ToggleBtnGroupHOC<
  TValue extends string,
  TIcon extends IconType = 'outline',
>({
  initialValue,
  toggleOptions,
  toggleBtnProps,
  exclusive = true,
  panelMapping,
  renderPanel,
  ...restToggleBtnGroupProps
}: ToggleBtnHOCProps<TValue, TIcon>) {
  const [value, setValue] = useState<TValue>(
    initialValue ?? toggleOptions[0]?.value
  )

  const handleAlignment = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: TValue | null
  ) => {
    if (newValue !== null) {
      setValue(newValue)
    }
  }

  return (
    <>
      <ToggleButtonGroup
        value={value}
        exclusive={exclusive}
        onChange={handleAlignment}
        {...restToggleBtnGroupProps}
      >
        {toggleOptions.map(({ label, icon, value, ...props }) => (
          <ToggleButton
            key={value}
            value={value}
            aria-label="centered"
            {...toggleBtnProps}
            {...props}
          >
            {icon && (
              <Icon
                fontSize="extraSmall"
                styles={{
                  mr: 1,
                }}
                {...icon}
              />
            )}
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {renderPanel && renderPanel({ value })}
      {value && panelMapping?.[value]}
    </>
  )
}
