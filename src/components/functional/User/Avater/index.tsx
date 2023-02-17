/** @jsxImportSource @emotion/react */

import { FC } from 'react'
import { css } from '@emotion/react'

type AvaterProps = {
  size: 'small' | 'medium' | 'large'
  src?: string
}

const avaterStyles = {
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

export const Avater: FC<AvaterProps> = ({ size, src }) => {
  const defaultImg = '../../../../../public/images/mytech-icon.png'
  return (
    <div css={avaterStyles.container} data-size={size}>
      <img css={avaterStyles.icon} src={src ?? defaultImg} />
    </div>
  )
}
