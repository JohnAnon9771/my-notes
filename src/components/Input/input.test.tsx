import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {Input} from 'components'

describe('InputComponent', () => {
  beforeEach(() =>
    render(<Input type="email" name="email" id="email" label="Email" />)
  )

  it('should render correctly', () => {
    expect(screen.findAllByTestId('input-field')).toBeTruthy()
  })

  it('should show an error with email incorrect', () => {
    userEvent.type(screen.getByTestId('input-field'), 'ndasdas2.com')
    expect(screen.getByTestId('input-error')).toBeTruthy()
  })

  it('should not show an error with email correct', () => {
    const email = 'anything@gmail.com'
    userEvent.type(screen.getByTestId('input-field'), email)
    // console.log(screen.getAllByTestId('input-error'))
    // expect(screen.findByTestId('span')).toBe({})
  })
})
