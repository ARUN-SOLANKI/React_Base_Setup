/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PaletteOptions } from '@mui/material/styles'

import { colors } from './color'

const { neutral, gold, red, green, yellow, blue } = colors

// Configure all the required colors palettes here
export const lightThemePalette: PaletteOptions = {
  mode: 'light',

  primary: {
    main: neutral[950]!,
  },

  muted: {
    main: neutral[100]!,
  },

  secondary: {
    main: neutral.white!,
  },

  highlight: {
    main: gold[500]!,
  },

  text: {
    primary: neutral[950]!,
    secondary: neutral[500],
  },

  state: {
    hover: neutral[50],
    active: neutral[100],
  },

  inverted: {
    bg: neutral[1000],
    text: neutral.white,
  },

  error: {
    main: red[600]!,
  },

  success: {
    main: green[600]!,
  },

  warning: {
    main: yellow[600]!,
  },

  info: {
    main: blue[600]!,
  },

  border: {
    // black with 0.1 opacity
    main: 'rgba(0, 0, 0, 0.1)',
  },

  background: {
    default: neutral.white,
    paper: neutral[50],
  },

  common: {
    white: neutral.white,
    black: neutral.black,
  },

  custom: {
    main: '#f5f5f5',
    thumb: '#bbbec2',
    track: '#e8e9eb',
  },

  ...colors,
}
