import { FC } from 'react'
import { IoNotificationsOutline } from 'react-icons/all'

import { Icon } from '@/components/ui/Icon'

export const NotificationIcon: FC<Icon> = ({ size = 22 }) => {
  return <IoNotificationsOutline size={size} />
}
