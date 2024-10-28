import * as React from 'react'

import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { CustomStyles, getStyles } from 'shared/styles'
import { Noop } from 'shared/typescript'

import defaultStyles, { StylesClassNames } from './styles'

export type ActionCardProps = {
  image: string
  title: string
  description: string
  onClick?: Noop
  csx?: CustomStyles<StylesClassNames>
}

export function ActionCard({
  image,
  description,
  title,
  onClick,
  csx,
}: ActionCardProps) {
  const styles = getStyles(defaultStyles, csx)

  return (
    <Card {...styles('wrapper')}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
