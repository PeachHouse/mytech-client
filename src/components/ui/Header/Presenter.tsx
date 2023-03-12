/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FC } from 'react'

import { Avatar } from '@/components/model/User'
import { SearchIcon, NotificationIcon, PostIcon } from '@/components/ui'

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

export const Presenter: FC<HeaderProps> = ({ onClick }) => {
  return (
    <header css={headerStyles.container}>
      <nav css={headerStyles.navigation}>
        <h2>mytech</h2>
        <ul css={headerStyles.wrapper}>
          <li css={headerStyles.list} onClick={onClick}>
            <SearchIcon />
          </li>
          <li css={headerStyles.list}>
            <NotificationIcon />
          </li>
          <li css={headerStyles.list}>
            <PostIcon />
          </li>
          <li css={headerStyles.list}>
            <Avatar size='small' />
          </li>
        </ul>
      </nav>
    </header>
  )
}
