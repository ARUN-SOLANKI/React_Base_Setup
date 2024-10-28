import { MouseEvent, useState } from 'react'

import {
  Divider,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  SxProps,
} from '@mui/material'

import { Icon, IconProps, IconType } from 'shared/icons'
import { ColorsValues } from 'shared/styles'
import { generateUniqueId, stopDefault } from 'shared/utils'

import styles, { getMenuColorSx } from './styles'

type DefaultMenuItemProps = Omit<
  MenuItemProps,
  'value' | 'children' | 'color'
> & {
  color?: ColorsValues
}

export type MenuHOCMenuItemProps<
  TValue extends string,
  TIcon extends IconType = 'outline',
> = {
  keepOpen?: boolean
  value?: TValue
  icon?: IconProps<TIcon>
  label?: MenuItemProps['children']
  divider?: boolean
} & DefaultMenuItemProps

type HTMLElementMouseEvent = MouseEvent<HTMLElement>

export type MenuHOCProps<
  TValue extends string,
  TIcon extends IconType = 'outline',
> = {
  renderAnchor: (props: {
    openMenu: (event: React.MouseEvent<HTMLElement>) => void
  }) => React.ReactNode
  menuItems: MenuHOCMenuItemProps<TValue, TIcon>[]
  menuItemProps?: DefaultMenuItemProps
  onMenuSelect?: (value?: TValue) => void
  showAnchorEvenIfOptionNotAvailable?: boolean
} & Omit<MenuProps, 'open'>

export function MenuHOC<
  TValue extends string,
  TIcon extends IconType = 'outline',
>({
  renderAnchor,
  menuItems,
  slotProps,
  menuItemProps,
  onMenuSelect,
  showAnchorEvenIfOptionNotAvailable = false,
  ...menuProps
}: MenuHOCProps<TValue, TIcon>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleOpenMenu = stopDefault((event: HTMLElementMouseEvent) => {
    setAnchorEl(event.currentTarget)
  })

  const handleClose = stopDefault((_event: HTMLElementMouseEvent) => {
    setAnchorEl(null)
  })

  const open = Boolean(anchorEl)

  if (menuItems.length === 0 && !showAnchorEvenIfOptionNotAvailable) return null

  return (
    <>
      {renderAnchor({ openMenu: handleOpenMenu })}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={(e) => handleClose(e as HTMLElementMouseEvent)}
        slotProps={{
          ...slotProps,
          paper: {
            elevation: 0,
            sx: styles.menuPaper,
            ...slotProps?.paper,
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        {...menuProps}
      >
        {menuItems
          .reduce(
            (acc, item) => {
              if (item.divider)
                return [
                  ...acc,
                  { ...item, divider: false },
                  { divider: true },
                ] as MenuHOCProps<TValue>['menuItems']
              return [...acc, item] as MenuHOCProps<TValue>['menuItems']
            },
            [] as MenuHOCProps<TValue>['menuItems']
          )
          .map(
            ({ keepOpen, label, onClick, icon, color, divider, ...props }) => {
              return divider ? (
                <Divider key={generateUniqueId('menu-item')} />
              ) : (
                <MenuItem
                  key={generateUniqueId('menu-item')}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    if (onClick) onClick(e)
                    if (onMenuSelect) onMenuSelect(props.value)
                    if (!keepOpen) {
                      handleClose(e as unknown as HTMLElementMouseEvent)
                    }
                  }}
                  {...menuItemProps}
                  {...props}
                  sx={
                    {
                      ...getMenuColorSx(color),
                      ...menuItemProps?.sx,
                      ...props.sx,
                    } as SxProps
                  }
                >
                  {icon && (
                    <Icon
                      color={color}
                      fontSize="extraSmall"
                      styles={{
                        mr: 1,
                      }}
                      {...icon}
                    />
                  )}
                  {label}
                </MenuItem>
              )
            }
          )}
      </Menu>
    </>
  )
}
