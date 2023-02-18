import { MemoryRouter } from 'react-router-dom'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ProgressBar } from '@/components/ui/ProgressBar'
import { colors } from '@/constants/colors'

export default { component: ProgressBar } as ComponentMeta<typeof ProgressBar>

export const Default: ComponentStoryObj<typeof ProgressBar> = {
  args: {
    indicatorColor: colors.red,
    rate: 60,
    label: 'docker',
  },
}
