'use client'

import { signIn } from 'next-auth/react'

export default function LoginButton() {
  return (
    <button
      type="button"
      onClick={() => signIn('google')}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1rem',
        background: '#1a73e8',
        color: 'white',
        border: 'none',
        borderRadius: 8,
        fontSize: 16,
        cursor: 'pointer',
      }}
      aria-label="Sign in with Google"
    >
      Continue with Google
    </button>
  )
}
