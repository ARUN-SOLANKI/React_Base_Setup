/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PaletteOptions } from '@mui/material/styles'

import { colors } from './color'

const { neutral, gold, red, green, yellow, blue } = colors

// Configure all the required colors palettes here
export const darkThemePalette: PaletteOptions = {
  mode: 'dark',

  primary: {
    main: neutral.white!,
  },

  muted: {
    main: neutral[900]!,
  },

  secondary: {
    main: neutral[950]!,
  },

  highlight: {
    main: gold[500]!,
  },

  text: {
    primary: neutral.white,
    secondary: neutral[500],
  },

  state: {
    hover: neutral[950],
    active: neutral[900],
  },

  inverted: {
    bg: neutral.white,
    text: neutral[950],
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
    // white with 0.1 opacity
    main: 'rgba(255, 255, 255, 0.1)',
  },

  background: {
    default: neutral[1000],
    paper: neutral[950],
  },

  common: {
    white: neutral.black,
    black: neutral.white,
  },

  custom: {
    main: '#f5f5f5',
    thumb: '#bbbec2',
    track: '#e8e9eb',
  },

  ...colors,
}
