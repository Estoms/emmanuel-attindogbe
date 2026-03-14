'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Shield, Server, Link, Leaf, Lock, Zap,
  MapPin, Mail, ArrowRight,
} from 'lucide-react';
import NextLink from 'next/link';
import { aboutData } from '@/data/about';

type Props = { data: typeof aboutData };

// Map icon string → composant
const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Shield, Server, Link, Leaf, Lock, Zap,
};

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-40px' },
  transition:  { duration: 0.5, delay, ease: 'easeOut' as const },
});

// ── Composant Terminal animé ──
function TerminalBlock({ lines }: { lines: string[] }) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];
    if (currentChar < line.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[currentLine] = (next[currentLine] ?? '') + line[currentChar];
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 180);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, lines]);

  return (
    <div style={{
      borderRadius: '10px',
      border:       '1px solid var(--border)',
      background:   'var(--surface-1)',
      overflow:     'hidden',
      fontFamily:   'var(--font-mono)',
      fontSize:     '0.82rem',
    }}>
      {/* Barre titre terminal */}
      <div style={{
        display:      'flex',
        alignItems:   'center',
        gap:          '0.4rem',
        padding:      '0.65rem 1rem',
        borderBottom: '1px solid var(--border)',
        background:   'var(--surface-2)',
      }}>
        {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
          <span key={c} style={{
            width: 10, height: 10, borderRadius: '50%',
            background: c, display: 'inline-block',
          }} />
        ))}
        <span style={{ marginLeft: '0.5rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          terminal — zsh
        </span>
      </div>

      {/* Contenu */}
      <div style={{ padding: '1.25rem', lineHeight: 1.9 }}>
        {lines.map((line, i) => (
          <div key={i} style={{
            color: line.startsWith('$')
              ? 'var(--accent-start)'
              : line.startsWith('>')
                ? 'var(--text-secondary)'
                : 'var(--text-muted)',
          }}>
            {displayed[i] ?? ''}
            {i === currentLine && currentLine < lines.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                style={{
                  display: 'inline-block', width: 8, height: '1em',
                  background: 'var(--accent-start)', marginLeft: 2, verticalAlign: 'middle',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutView({ data }: Props) {
  const t = useTranslations('about');

  return (
    <div style={{ paddingBlock: '3rem' }}>

      {/* ── TITRE ── */}
      <motion.div {...fadeUp(0)} style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
          {t('page_title')} <span className="gradient-text">{t('page_highlight')}</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '520px', lineHeight: 1.7 }}>
          {data.headline}
        </p>
      </motion.div>

      {/* ══ SPLIT — TERMINAL + INFOS ══ */}
      <div className="about-top-grid" style={{ marginBottom: '5rem' }}>

        <motion.div {...fadeUp(0.1)}>
          <TerminalBlock lines={data.terminalLines} />
        </motion.div>

        <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
          <div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              {t('label_formation')}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5 }}>
              {data.currentFormation}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={14} style={{ color: 'var(--accent-start)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{data.location}</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={14} style={{ color: 'var(--accent-start)', flexShrink: 0 }} />
            <a href={`mailto:${data.email}`} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
              {data.email}
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--accent-start)', boxShadow: '0 0 8px var(--accent-start)', flexShrink: 0,
            }} />
            <p style={{ fontSize: '0.875rem', color: 'var(--accent-start)', fontWeight: 500 }}>
              {t('label_available')}
            </p>
          </div>

          <NextLink href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.65rem 1.3rem', borderRadius: '8px',
            background: 'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
            color: '#000', fontWeight: 700, fontSize: '0.85rem',
            textDecoration: 'none', width: 'fit-content',
          }}>
            {t('cta_contact')}
            <ArrowRight size={14} />
          </NextLink>
        </motion.div>
      </div>

      {/* ══ STORYTELLING ══ */}
      <section style={{ marginBottom: '5rem' }}>
        <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {t('story_title')}
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {data.story.map((block, i) => (
            <motion.div
              key={block.id}
              {...fadeUp(i * 0.1)}
              style={{
                padding: '1.75rem', borderRadius: '10px',
                border: '1px solid var(--border)', background: 'var(--surface-1)',
                display: 'grid', gap: '2rem', alignItems: 'start',
              }}
              className="story-card"
            >
              <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-start)', lineHeight: 1.4 }}>
                {block.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ CENTRES D'INTÉRÊT TECH ══ */}
      <section>
        <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {t('interests_title')}
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
          {data.techInterests.map((interest, i) => {
            const Icon = iconMap[interest.icon];
            return (
              <motion.div
                key={interest.label}
                {...fadeUp(i * 0.07)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.65rem',
                  padding: '0.9rem 1rem', borderRadius: '8px',
                  border: '1px solid var(--border)', background: 'var(--surface-1)',
                  fontSize: '0.855rem', color: 'var(--text-secondary)',
                }}
              >
                {Icon && <Icon size={15} style={{ color: 'var(--accent-start)', flexShrink: 0 }} />}
                {interest.label}
              </motion.div>
            );
          })}
        </div>
      </section>

      <style>{`
        .about-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .story-card {
          grid-template-columns: 200px 1fr;
        }
        @media (max-width: 768px) {
          .about-top-grid { grid-template-columns: 1fr !important; }
          .story-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
