import { Avatar } from '@mui/material'

import { useUserSession } from 'entities/state'

export function UserAvatar() {
  const { user } = useUserSession()

  return <Avatar>{user.name.charAt(0)}</Avatar>
}
