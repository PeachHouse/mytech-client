import { FC } from 'react'
import { Bars } from 'react-loader-spinner'

import { Color, colors } from '@/styles/colors'

type LoadingProps = {
  height?: number
  width?: number
  color?: Color
}

export const Loading: FC<LoadingProps> = ({
  height = 30,
  width = 30,
  color = colors.darkPurple,
}) => {
  return (
    <Bars
      height={height}
      width={width}
      color={color}
      ariaLabel='bars-loading'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
    />
  )
}
