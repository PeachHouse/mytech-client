import { FC } from 'react'
import { AiOutlineSearch } from 'react-icons/all'

import { Icon } from '@/components/ui/Icon'

export const SearchIcon: FC<Icon> = ({ size = 22 }) => {
  return <AiOutlineSearch size={size} />
}
