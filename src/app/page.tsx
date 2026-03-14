export default function Home() {
  return (
    <div style={{
      minHeight: 'calc(100vh - var(--header-height))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginBottom: '1rem',
      }}>
        Emmanuel <span className="gradient-text">Attindogbe</span>
      </h1>
      <p style={{
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        lineHeight: 1.6,
        marginBottom: '2rem',
      }}>
        Développeur Full Stack & Systèmes. Bienvenue sur mon portfolio en phase de lancement.
      </p>
      
      <div style={{
        padding: '1rem 2rem',
        borderRadius: '8px',
        border: '1px solid var(--border)',
        background: 'var(--surface-1)',
        color: 'var(--accent-start)',
        fontSize: '0.9rem',
        fontWeight: 500,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}>
        <span style={{
          display: 'inline-block',
          width: 8, height: 8, borderRadius: '50%',
          backgroundColor: 'var(--accent-start)',
          boxShadow: '0 0 8px var(--accent-start)',
          marginRight: '0.6rem',
        }}></span>
        Mise à jour de la Home en cours
      </div>
    </div>
  );
}
