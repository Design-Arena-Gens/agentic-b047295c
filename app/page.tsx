import LoginButton from '../components/LoginButton'

export default function Page() {
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100dvh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Google Login</h1>
        <p>Click to initiate Google OAuth via NextAuth.</p>
        <LoginButton />
      </div>
    </main>
  )
}
