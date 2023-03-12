import { FC } from 'react'
import { HiOutlineDocumentPlus } from 'react-icons/all'

import { Icon } from '@/components/ui/Icon'

export const PostIcon: FC<Icon> = ({ size = 22 }) => {
  return <HiOutlineDocumentPlus size={size} />
}
