import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Presenter } from '@/components/ui/Header/Presenter'
import { ROUTING_PATH } from '@/routes'

export const Header: FC = () => {
  const navigate = useNavigate()

  const handleTransitSearch = () => {
    navigate(ROUTING_PATH.SEARCH)
  }
  return <Presenter onClick={handleTransitSearch} />
}
