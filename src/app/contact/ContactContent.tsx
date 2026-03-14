'use client';

import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    label: 'emmanuel.attindogbe@outlook.fr',
    href: 'mailto:emmanuel.attindogbe@outlook.fr',
    icon: Mail,
  },
  {
    label: 'linkedin.com/in/emmanuel-attindogbe',
    href: 'https://www.linkedin.com/in/emmanuel-attindogbe/',
    icon: Linkedin,
  },
  {
    label: 'github.com/Estoms',
    href: 'https://github.com/Estoms',
    icon: Github,
  },
];

export default function ContactContent() {
  return (
    <div style={{
      minHeight: 'calc(100vh - var(--header-height))',
      display: 'flex',
      alignItems: 'center',
      paddingBlock: '4rem',
    }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          width: '100%',
          alignItems: 'start',
        }}
        className="contact-grid"
      >

        {/* ── COLONNE GAUCHE — Infos ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.3rem 0.85rem',
            borderRadius: '999px',
            border: '1px solid var(--border)',
            width: 'fit-content',
            fontSize: '0.75rem',
            color: 'var(--accent-start)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: 'var(--accent-start)',
              boxShadow: '0 0 8px var(--accent-start)',
              display: 'inline-block',
            }} />
            Disponible
          </div>

          {/* Accroche */}
          <div>
            <h1 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
            }}>
              Un système à optimiser ?{' '}
              <span className="gradient-text">
                Discutons de votre prochain défi technique.
              </span>
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Je réponds généralement sous 24h. Pas de formulaire perdu
              dans les limbes — une vraie conversation.
            </p>
          </div>

          {/* Liens de contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-1)',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'border-color var(--transition-fast), color var(--transition-fast), background var(--transition-fast)',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-start)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.background = 'var(--surface-2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'var(--surface-1)';
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Icon size={15} style={{ color: 'var(--accent-start)', flexShrink: 0 }} />
                  {label}
                </span>
                <ArrowUpRight size={13} style={{ opacity: 0.4, flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>

        {/* ── COLONNE DROITE — Formulaire ── */}
        <div style={{
          padding: '2rem',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          background: 'var(--surface-1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Envoyer un message
          </h2>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {[
              { id: 'nom', label: 'Nom', type: 'text', placeholder: 'Jean Dupont' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'jean@example.com' },
              { id: 'sujet', label: 'Sujet', type: 'text', placeholder: 'Proposition de projet' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor={id} style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    padding: '0.7rem 1rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                    width: '100%',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'var(--accent-start)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-glow)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
            ))}

            {/* Champ Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Message
              </label>
              <textarea
                id="message"
                placeholder="Décrivez votre projet ou votre besoin..."
                rows={5}
                style={{
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '0.7rem 1rem',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'var(--font-sans)',
                  transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                  width: '100%',
                }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-start)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-glow)';
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Bouton Envoyer */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.85rem',
                borderRadius: '6px',
                border: 'none',
                background: 'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
                color: '#000',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.02em',
                cursor: 'pointer',
                transition: 'opacity var(--transition-fast), transform var(--transition-fast)',
                marginTop: '0.5rem',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = '0.88';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Envoyer le message →
            </button>
          </form>
        </div>

      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
}
