import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div style={{
      minHeight:      'calc(100vh - var(--header-height))',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      paddingBlock:   '4rem',
      textAlign:      'center',
    }}>
      <div style={{ maxWidth: '480px' }}>

        {/* Code 404 massif */}
        <div style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      'clamp(5rem, 15vw, 9rem)',
          fontWeight:    800,
          letterSpacing: '-0.05em',
          lineHeight:    1,
          background:    'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor:  'transparent',
          backgroundClip:       'text',
          marginBottom:  '1.5rem',
          opacity:       0.85,
        }}>
          {t('code')}
        </div>

        {/* Ligne décorative */}
        <div style={{
          width:        '60px',
          height:       '2px',
          background:   'linear-gradient(90deg, var(--accent-start), var(--accent-end))',
          borderRadius: '999px',
          margin:       '0 auto 1.5rem',
        }} />

        <h1 style={{
          fontSize:      'clamp(1.4rem, 3vw, 1.9rem)',
          fontWeight:    700,
          letterSpacing: '-0.02em',
          color:         'var(--text-primary)',
          marginBottom:  '0.75rem',
        }}>
          {t('title')}
        </h1>

        <p style={{
          fontSize:     '0.95rem',
          color:        'var(--text-secondary)',
          lineHeight:   1.7,
          marginBottom: '2.5rem',
        }}>
          {t('description')}
        </p>

        <Link href="/" style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '0.5rem',
          padding:        '0.75rem 1.75rem',
          borderRadius:   '8px',
          background:     'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
          color:          '#000',
          fontWeight:     700,
          fontSize:       '0.9rem',
          textDecoration: 'none',
          letterSpacing:  '0.01em',
        }}>
          {t('cta')}
        </Link>

        {/* Fond décoratif */}
        <div style={{
          position:     'fixed',
          top:          '50%',
          left:         '50%',
          transform:    'translate(-50%, -50%)',
          width:        '500px',
          height:       '300px',
          borderRadius: '50%',
          background:   'radial-gradient(ellipse, var(--accent-glow), transparent 70%)',
          filter:       'blur(60px)',
          pointerEvents: 'none',
          zIndex:       -1,
        }} />
      </div>
    </div>
  );
}
