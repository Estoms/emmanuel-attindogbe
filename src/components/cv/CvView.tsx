'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Download, CheckCircle, FileText } from 'lucide-react';

type Props = { highlights: string[] };

export default function CvView({ highlights }: Props) {
  const t = useTranslations('cv');

  return (
    <div style={{
      minHeight:      'calc(100vh - var(--header-height))',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      paddingBlock:   '4rem',
    }}>
      <div className="cv-grid">

        {/* ── GAUCHE — Points forts ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' as const }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div>
            <p style={{
              fontSize: '0.72rem', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: '0.6rem',
            }}>
              {t('summary_label')}
            </p>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Emmanuel{' '}
              <span className="gradient-text">Attindogbe</span>
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              {t('role')}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {highlights.map((point) => (
              <div key={point} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <CheckCircle size={15} style={{ color: 'var(--accent-start)', flexShrink: 0, marginTop: '0.2rem' }} />
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── DROITE — Bouton téléchargement ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' as const }}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: '2rem',
            padding: '3rem 2.5rem', borderRadius: '16px',
            border: '1px solid var(--border)', background: 'var(--surface-1)',
          }}
        >
          {/* Icône décorative */}
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--accent-start)15', border: '1px solid var(--accent-start)30',
          }}>
            <FileText size={34} style={{ color: 'var(--accent-start)' }} />
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
              {t('file_label')}
            </p>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              {t('file_desc')}
            </p>
          </div>

          {/* Bouton principal */}
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.03, boxShadow: '0 0 28px var(--accent-glow)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '1rem 2.2rem', borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
              color: '#000', fontWeight: 800, fontSize: '1rem',
              textDecoration: 'none', letterSpacing: '0.01em',
              width: '100%', justifyContent: 'center',
            }}
          >
            <Download size={18} />
            {t('btn_download')}
          </motion.a>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            {t('last_update')}
          </p>
        </motion.div>
      </div>

      <style>{`
        .cv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          width: 100%;
          max-width: 860px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .cv-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .cv-grid > div:first-child {
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
