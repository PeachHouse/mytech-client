/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as Progress from '@radix-ui/react-progress'
import { FC } from 'react'

import { colors } from '@/constants/colors'

type ProgressProps = {
  rate: number

  indicatorColor: (typeof colors)[keyof typeof colors]

  label: string
}

export const ProgressBar: FC<ProgressProps> = (props) => {
  const progressBarStyles = {
    root: css`
      position: relative;
      overflow: hidden;
      background: ${colors.gray};
      border-radius: 4px;
      width: 100%;
      height: 10px;
      margin-top: 5px;
      transform: translateZ(0);
    `,
    indicator: css`
      background-color: ${props.indicatorColor};
      width: 100%;
      height: 100%;
      transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
      transform: translateX(-${100 - props.rate}%);
    `,
    label: css`
      width: 100%;
      display: flex;
      justify-content: space-between;
    `,
  }

  return (
    <>
      <div css={progressBarStyles.label}>
        <h2>{props.label}</h2>
        <p>{props.rate}</p>
      </div>
      <Progress.Root css={progressBarStyles.root} value={props.rate}>
        <Progress.Indicator css={progressBarStyles.indicator} />
      </Progress.Root>
    </>
  )
}
