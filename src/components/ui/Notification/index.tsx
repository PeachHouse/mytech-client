import { IoNotificationsOutline } from 'react-icons/all'
import { FC } from 'react'

type NotificationProps = {
  size: number
}

export const Notification: FC<NotificationProps> = ({ size }) => {
  return <IoNotificationsOutline size={size} />
}
