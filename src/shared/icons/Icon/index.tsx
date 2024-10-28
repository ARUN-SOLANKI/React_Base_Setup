import { FunctionComponent, SVGProps } from 'react'

import { SvgIcon, SvgIconProps, SxProps } from '@mui/material'

import { ColorsValues } from 'shared/styles'

import { brokenIcons } from '../resources/broken'
import { outlineIcons } from '../resources/outline'
import { solidIcons } from '../resources/solid'

type IconRecord = Record<
  IconType,
  Record<
    string,
    FunctionComponent<
      SVGProps<SVGSVGElement> & {
        title?: string
      }
    >
  >
>

export type IconType = 'solid' | 'outline' | 'broken'

const iconRecord = {
  outline: outlineIcons,
  solid: solidIcons,
  broken: brokenIcons,
} satisfies IconRecord

type DefaultIconProps = Omit<SvgIconProps, 'type' | 'name' | 'color' | 'sx'> & {
  color?: ColorsValues
  styles?: SxProps
}

export type IconOptions<T extends IconType> = {
  type?: T
  name: keyof (typeof iconRecord)[T]
}

/**
 * To be used as prop type for other components that will use the Icon component internally.
 */

export type IconProps<T extends IconType = 'outline'> = IconOptions<T> &
  DefaultIconProps

export function Icon<T extends IconType = 'outline'>(props: IconProps<T>) {
  const { type = 'outline', name } = props
  const { styles, color, ...restProps } = props

  return (
    <SvgIcon
      sx={{
        ...styles,
        color: color ?? 'text.secondary',
        fill: 'currentColor !important',
        '& path': {
          fill: 'currentColor !important',
        },
      }}
      component={iconRecord[type as T][name]}
      {...(restProps as SvgIconProps)}
    />
  )
}
