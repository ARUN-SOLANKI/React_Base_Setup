import { CSSProperties } from 'react'

import {
  buttonBaseClasses,
  buttonClasses,
  CircularProgress,
  circularProgressClasses,
  formHelperTextClasses,
  inputBaseClasses,
  outlinedInputClasses,
  svgIconClasses,
  toggleButtonClasses,
} from '@mui/material'
import { ThemeOptions } from '@mui/material/styles'

import { BaselineStyleClasses, CustomStylesClasses } from 'shared/styles'
import { ForceAny } from 'shared/typescript'

import { StyleOverrideProps } from './types'
import { typographyStylesObj } from './typography'

/**
 * Include any mui component override here to be applied globally
 * To create custom mui component @see https://mui.com/material-ui/customization/creating-themed-components/
 */
export const components: ThemeOptions['components'] = {
  MuiCssBaseline: {
    styleOverrides: {
      body: ({ theme }: StyleOverrideProps) => ({
        overflow: 'auto',

        '& *': {
          '&::-webkit-scrollbar ': {
            width: '4px',
            height: '4px',
          },

          '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.custom.track,
            borderRadius: '14px',
          },

          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.custom.thumb,
            borderRadius: '14px',
          },

          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme.palette.custom.main,
          },
        },
      }),

      [`.${BaselineStyleClasses.flexCentered}`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      [`.${BaselineStyleClasses.showOnHoverParent}`]: {
        '&:hover': {
          [`& .${BaselineStyleClasses.showOnHoverChild}`]: {
            opacity: 1,
            visibility: 'visible',
          },
        },
      },
      [`.${BaselineStyleClasses.showOnHoverChild}`]: {
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
      },
    },
  },

  MuiTypography: {
    styleOverrides: {
      ...typographyStylesObj,
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderBottom: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: theme.palette.border.main,
      }),
    },
  },

  MuiAvatar: {
    styleOverrides: {
      root: ({ theme }) => ({
        width: 32,
        height: 32,
        backgroundColor: theme.palette.blue[500],
      }),
    },
  },

  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
    styleOverrides: {
      tooltip: ({ theme }) => ({
        borderRadius: '8px',
        backgroundColor: theme.palette.inverted.bg,
        ...theme.typography.caption1,
        height: '32px',
        padding: '8px 12px',
      }),
      tooltipPlacementRight: {
        [`& .MuiTooltip-arrow`]: {
          marginLeft: '-0.6em !important',
        },
      },
      tooltipPlacementLeft: {
        [`& .MuiTooltip-arrow`]: {
          marginRight: '-0.6em !important',
        },
      },
      arrow: ({ theme }) => ({
        color: theme.palette.inverted.bg,
      }),
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
      },
      modal: {
        // backgroundColor: theme.palette.background.paper,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '24px',
      },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderColor: theme.palette.border.main,
      }),
    },
  },

  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '8px 16px',
        borderRadius: '8px',
        textTransform: 'capitalize',
        ...(theme.typography.caption1?.[500] as CSSProperties),

        '&:hover': {
          backgroundColor: theme.palette.state.active,
        },

        [`&.${toggleButtonClasses.selected}`]: {
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
          },
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.inverted.text,
        },
      }),
    },
  },

  MuiIconButton: {
    styleOverrides: {
      sizeMedium: {
        height: '32px',
        width: '32px',
        padding: '4px',
      },

      root: ({ theme }) => ({
        borderRadius: '8px',

        [`&.${CustomStylesClasses.outline}`]: {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: theme.palette.border.main,
        },

        '&:hover': {
          // borderColor: theme.palette.border.main,
          backgroundColor: theme.palette.state.hover,
          color: theme.palette.text.primary,
          [`& .${svgIconClasses.root}`]: {
            color: theme.palette.text.primary,
          },
        },
        '&:active': {
          backgroundColor: theme.palette.state.active,
        },
      }),
    },
  },

  MuiLinearProgress: {
    styleOverrides: {
      colorPrimary: ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
      }),
      barColorPrimary: ({ theme }) => ({
        backgroundColor: theme.palette.state.active,
      }),
    },
  },

  MuiSvgIcon: {
    styleOverrides: {
      fontSizeExtraSmall: {
        fontSize: '1rem',
      },
    },
  },

  MuiMenu: {
    styleOverrides: {
      list: ({ theme }) => ({
        padding: '8px',
        borderRadius: '8px',

        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.border.main,
      }),
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '8px 12px',
        borderRadius: '8px',

        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.text.primary,
          [`& .${svgIconClasses.root}`]: {
            color: theme.palette.text.primary,
          },
        },
        ...(theme.typography.body2['500'] as CSSProperties),
      }),
    },
  },

  MuiButton: {
    defaultProps: {
      variant: 'contained',
      startIcon: <CircularProgress id="loader" size={20} />,
    },
    styleOverrides: {
      outlined: ({ theme }) => ({
        borderColor: theme.palette.border.main,
        '&:hover': {
          borderColor: theme.palette.border.main,
          backgroundColor: theme.palette.state.hover,
        },
        '&:active': {
          backgroundColor: theme.palette.state.active,
        },
      }),
      disabled: ({ theme }) => ({
        [`& .${circularProgressClasses.root}`]: {
          color: theme.palette.text.secondary,
        },
      }),
      contained: ({ theme }) => ({
        [`& .${circularProgressClasses.root}`]: {
          color: theme.palette.inverted.text,
        },
      }),
      iconOnly: ({ theme }) => ({
        padding: '6px',
        minWidth: '38px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.border.main,
        borderRadius: 8,
        '& .MuiButton-icon': { margin: 0 },
        '&:hover': {
          borderColor: theme.palette.border.main,
          backgroundColor: theme.palette.state.hover,
        },
        '&:active': {
          backgroundColor: theme.palette.state.active,
        },
      }),
      root: ({ ownerState, theme }) => {
        return {
          ...(ownerState.color === 'muted' && {
            color: theme.palette.text.secondary,
          }),

          [`& .${circularProgressClasses.root}`]: {
            display: ownerState.loading ? 'block' : 'none',
          },

          [`& .${buttonClasses.startIcon}`]: {
            display:
              (ownerState.startIcon as ForceAny).props.id === 'loader' &&
              !ownerState.loading
                ? 'none'
                : 'inherit',
          },

          [`&.${buttonBaseClasses.disabled}`]: {
            [`& .${circularProgressClasses.root}`]: {
              color: theme.palette.text.secondary,
            },
          },

          textTransform: 'capitalize',
          borderRadius: 8,
        }
      },
      sizeExtraSmall: {
        height: '24px',
        fontSize: '0.625rem',
      },
      iconSizeExtraSmall: {},
      textSizeExtraSmall: {},
    },
  },

  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        top: '-15px !important',
        left: '-15px !important',
        color: theme.palette.text.secondary,
        [`&.${inputBaseClasses.focused}`]: {
          color: theme.palette.text.secondary,
        },
      }),
    },
  },

  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      InputLabelProps: {
        shrink: true,
      },
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.label && {
          marginTop: '18px',
        }),

        [`& .${formHelperTextClasses.root}`]: {
          position: 'absolute',
          bottom: -4,
          transform: 'translateY(100%)',
        },
      }),
    },
  },

  MuiInputBase: {
    styleOverrides: {
      sizeSmall: {
        height: '36px',
        fontSize: '0.875rem',
      },
      // FIXME: Only for FILLED mode
      root: ({ theme }) => ({
        height: '48px',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,

        [`&.${inputBaseClasses.disabled} .${inputBaseClasses.input}`]: {
          cursor: 'not-allowed',
        },

        [`&:hover`]: {
          backgroundColor: theme.palette.state.active,
        },
        [`&.${inputBaseClasses.focused}:hover`]: {
          backgroundColor: theme.palette.background.paper,
        },

        [`&.${inputBaseClasses.focused} .${inputBaseClasses.input}`]: {
          color: theme.palette.text.primary,
        },

        [`&.${inputBaseClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
          { borderColor: `${theme.palette.border.main} !important` },

        [`&.${inputBaseClasses.root}:hover .${outlinedInputClasses.notchedOutline}`]:
          { borderColor: 'transparent' },

        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: 'transparent',
          '& legend': {
            width: 0,
          },
        },
      }),
    },
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        margin: '4px 0px',
      },
    },
  },
}
