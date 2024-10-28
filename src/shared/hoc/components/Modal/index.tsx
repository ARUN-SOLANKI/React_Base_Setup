import { useState } from 'react'

import { CloseOutlined } from '@mui/icons-material'
import {
  Box,
  IconButton,
  Modal,
  ModalProps,
  Paper,
  PaperProps,
} from '@mui/material'

import { CustomStyles, getStyles } from 'shared/styles'
import { EitherOr } from 'shared/typescript'

import defaultStyles, { StylesClassNames } from './styles'

export type ModalContentComponent = (props: {
  closeModal: () => void
}) => React.ReactNode

export type ModalHOCAnchorProps = EitherOr<
  {
    open: boolean
    onClose: () => void
    renderAnchor: (props: { openModal: () => void }) => React.ReactNode
  },
  'renderAnchor'
>

export type ModalHOCHeaderProps = EitherOr<
  { title: string; renderHeader: ModalContentComponent },
  'renderHeader'
>

export type ModalHOCProps = {
  width?: number
  description?: string // FIXME: TypeScript: Make this work inside EitherOr
  renderContent: ModalContentComponent
  paperProps?: Omit<PaperProps, 'variant'>
  csx?: CustomStyles<StylesClassNames>
} & ModalHOCAnchorProps &
  ModalHOCHeaderProps &
  Omit<ModalProps, 'open' | 'onClose' | 'children'>

export function ModalHOC({
  width = 680,
  open = false,
  onClose = () => {},
  renderAnchor,
  renderContent,
  renderHeader,
  title,
  description,
  paperProps,
  csx,
  ...modalProps
}: ModalHOCProps) {
  const [openState, setOpenState] = useState(false)

  const closeModal = () => {
    onClose()
    setOpenState(false)
  }

  const openModal = () => setOpenState(true)

  const styles = getStyles(defaultStyles, csx)

  return (
    <>
      {renderAnchor && renderAnchor({ openModal })}
      <Modal open={openState || open} onClose={closeModal} {...modalProps}>
        <Paper
          {...styles('paper', {
            maxWidth: width,
          })}
          variant="modal"
          {...paperProps}
        >
          {renderHeader ? (
            renderHeader({ closeModal })
          ) : (
            <Box {...styles('header')}>
              <Box {...styles('heading')}>{title}</Box>
              <Box {...styles('caption')}>{description}</Box>
              <IconButton
                {...styles('closeIcon')}
                size="small"
                onClick={closeModal}
                color="primary"
              >
                <CloseOutlined fontSize="small" />
              </IconButton>
            </Box>
          )}
          {(openState || open) && renderContent({ closeModal })}
        </Paper>
      </Modal>
    </>
  )
}
