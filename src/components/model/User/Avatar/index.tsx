/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FC } from 'react'

import { AvatarProps } from '@/components/model/User'

const avatarStyles = {
  container: css`
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    &[data-size='small'] {
      width: 50px;
      height: 50px;
    }
    &[data-size='medium'] {
      width: 150px;
      height: 150px;
    }
    &[data-size='large'] {
      width: 200px;
      height: 200px;
    }
  `,
  icon: css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  `,
}

export const Avatar: FC<AvatarProps> = ({ size, src }) => {
  const defaultImg = 'https://source.unsplash.com/random'

  return (
    <div css={avatarStyles.container} data-size={size}>
      <img css={avatarStyles.icon} src={src ?? defaultImg} />
    </div>
  )
}
