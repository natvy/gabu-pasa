export default function VerifyPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
      <h2>Revisa tu correo :D</h2>
      <p>Te enviamos un enlace de verificación. Una vez confirmado, inicia sesión normalmente.</p>
      <a href="/login">Ir al login</a>
    </main>
  )
}