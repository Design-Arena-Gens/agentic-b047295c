import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginButton from '@/components/LoginButton'

jest.mock('next-auth/react', () => ({
  // Keep module shape minimal for our test
  signIn: jest.fn(),
}))

describe('LoginButton', () => {
  it('calls signIn with "google" when clicked', async () => {
    const user = userEvent.setup()
    const { signIn } = jest.requireMock('next-auth/react') as { signIn: jest.Mock }

    render(<LoginButton />)

    await user.click(screen.getByRole('button', { name: /sign in with google/i }))

    expect(signIn).toHaveBeenCalledTimes(1)
    expect(signIn).toHaveBeenCalledWith('google')
  })
})
