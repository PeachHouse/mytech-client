import { render, screen } from '@testing-library/react'

import { Button } from '@/components/ui'

describe('Button Component', () => {
  const buttonText = 'テスト'
  test('should render correctly', () => {
    render(<Button color='primary'>{buttonText}</Button>)
    expect(screen.queryByText('テスト')).toBeInTheDocument()
  })

  test('should disable when component with disabled props', () => {
    render(
      <Button color='primary' disabled>
        {buttonText}
      </Button>
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
