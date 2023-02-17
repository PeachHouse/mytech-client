/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FC } from 'react'
import {
  AiOutlineSearch,
  TbLogout,
  HiOutlineDocumentPlus,
  IoNotificationsOutline,
} from 'react-icons/all'
import { useNavigate } from 'react-router-dom'

import { Avater } from '@/components/functional/User/Avater'
import { ROUTING_PATH } from '@/routes'

const headerStyles = {
  container: css`
    padding: 30px;
  `,
  navigation: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  wrapper: css`
    display: flex;
    gap: 15px;
    align-items: center;
  `,
  list: css`
    cursor: pointer;
    padding: 10px;
    &:hover {
      opacity: 0.5;
    }
  `,
  icon: css`
    width: 70px;
    height: 70px;
  `,
}

type HeaderProps = {
  onClick: () => void
}

const Presentation: FC<HeaderProps> = ({ onClick }) => {
  return (
    <header css={headerStyles.container}>
      <nav css={headerStyles.navigation}>
        <h2>mytech</h2>
        <ul css={headerStyles.wrapper}>
          <li css={headerStyles.list} onClick={onClick}>
            <AiOutlineSearch size={22} />
          </li>
          <li css={headerStyles.list}>
            <IoNotificationsOutline size={22} />
          </li>
          <li css={headerStyles.list}>
            <HiOutlineDocumentPlus size={22} />
          </li>
          <li css={headerStyles.list}>
            <Avater size='small' />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export const Header: FC = () => {
  const navigate = useNavigate()

  const handleTransitSearch = () => {
    navigate(ROUTING_PATH.SEARCH)
  }
  return <Presentation onClick={handleTransitSearch} />
}
