import { svgIconClasses } from '@mui/material'

import { ColorsValues, StylesClasses, createStyles } from 'shared/styles'

const styles = createStyles({
  menuPaper: {
    // overflow: 'visible',
    // filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,

    // NOTE: Adds arrow to the menu
    // '&::before': {
    //   content: '""',
    //   display: 'block',
    //   position: 'absolute',
    //   top: 0,
    //   right: 14,
    //   width: 10,
    //   height: 10,
    //   bgcolor: 'background.paper',
    //   transform: 'translateY(-50%) rotate(45deg)',
    //   zIndex: 0,
    // },
  },
})

export const getMenuColorSx = (color: ColorsValues) => ({
  color,
  '&:hover': {
    color,
    [`& .${svgIconClasses.root}`]: {
      color,
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
