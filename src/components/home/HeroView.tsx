'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Mail, Download,
  ChevronDown, Terminal as TerminalIcon,
} from 'lucide-react';
import type { Project, Experience } from '@/types';

type Props = {
  featuredProjects: Project[];
  experiences:      Experience[];
};

// ── Stack technique pour le marquee ──
const stackItems = [
  'PYTHON', 'NEXT.JS', 'REACT', 'NODE.JS',
  'KOTLIN', 'ANDROID', 'TYPESCRIPT', 'AWS',
  'LINUX', 'POSTGRESQL', 'MONGODB', 'DOCKER',
  'GIT', 'FIGMA', 'PHP', 'JAVA',
];

// ── Lignes terminal hero ──
const terminalLines = [
  { text: '$ whoami',                          color: 'var(--accent-start)' },
  { text: '> Emmanuel Attindogbe',             color: 'var(--text-secondary)' },
  { text: '$ cat stack.txt',                   color: 'var(--accent-start)' },
  { text: '> Full Stack · DevOps · Mobile',    color: 'var(--text-secondary)' },
  { text: '$ echo $STATUS',                    color: 'var(--accent-start)' },
  { text: '> Disponible — Open to work ✓',     color: 'var(--accent-end)' },
];

// ── Composant Terminal animé ──
function HeroTerminal() {
  const [lines, setLines]   = useState<{ text: string; color: string }[]>([]);
  const [done, setDone]     = useState(false);
  const indexRef            = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < terminalLines.length) {
        setLines((prev) => {
          const nextLine = terminalLines[indexRef.current];
          if (!nextLine) return prev;
          return [...prev, nextLine];
        });
        indexRef.current += 1;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 420);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      borderRadius: '10px',
      border:       '1px solid var(--border)',
      background:   'var(--surface-1)',
      overflow:     'hidden',
      fontFamily:   'var(--font-mono)',
      fontSize:     '0.82rem',
      width:        '100%',
      maxWidth:     '420px',
    }}>
      {/* Barre titre */}
      <div style={{
        display:      'flex',
        alignItems:   'center',
        gap:          '0.4rem',
        padding:      '0.6rem 1rem',
        borderBottom: '1px solid var(--border)',
        background:   'var(--surface-2)',
      }}>
        {['#ff5f57','#ffbd2e','#28c840'].map((c) => (
          <span key={c} style={{
            width: 9, height: 9, borderRadius: '50%',
            background: c, display: 'inline-block',
          }} />
        ))}
        <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          portfolio — zsh
        </span>
      </div>

      {/* Lignes */}
      <div style={{ padding: '1rem 1.25rem', lineHeight: 2 }}>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            style={{ color: line.color }}
          >
            {line.text}
          </motion.div>
        ))}
        {!done && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
            style={{
              display: 'inline-block', width: 8, height: '0.85em',
              background: 'var(--accent-start)', verticalAlign: 'middle',
            }}
          />
        )}
      </div>
    </div>
  );
}

// ── Composant Marquee ──
function TechMarquee() {
  const items = [...stackItems, ...stackItems];
  return (
    <div style={{
      position:   'relative',
      overflow:   'hidden',
      padding:    '1.5rem 0',
      borderTop:  '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--surface-1)',
    }}>
      {/* Fade gauche */}
      <div style={{
        position:   'absolute', left: 0, top: 0, bottom: 0,
        width:      '80px', zIndex: 2,
        background: 'linear-gradient(90deg, var(--background), transparent)',
      }} />
      {/* Fade droite */}
      <div style={{
        position:   'absolute', right: 0, top: 0, bottom: 0,
        width:      '80px', zIndex: 2,
        background: 'linear-gradient(-90deg, var(--background), transparent)',
      }} />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '3rem', width: 'max-content' }}
      >
        {items.map((item, i) => (
          <span key={i} style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.78rem',
            fontWeight:    600,
            letterSpacing: '0.12em',
            color:         'var(--text-muted)',
            whiteSpace:    'nowrap',
            display:       'flex',
            alignItems:    'center',
            gap:           '0.5rem',
          }}>
            <span style={{
              width: 4, height: 4, borderRadius: '50%',
              background: 'var(--accent-start)',
              display: 'inline-block', flexShrink: 0,
            }} />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ── Composant Photo ──
function DeveloperPhoto() {
  return (
    <div style={{
      position:     'relative',
      width:        '100%',
      maxWidth:     '320px',
      flexShrink:   0,
    }}>
      {/* Cadre décoratif décalé */}
      <div style={{
        position:     'absolute',
        top:          '12px',
        left:         '12px',
        right:        '-12px',
        bottom:       '-12px',
        borderRadius: '16px',
        border:       '1px solid var(--accent-start)',
        opacity:      0.25,
        zIndex:       0,
      }} />

      {/* Photo */}
      <div style={{
        position:     'relative',
        width:        '100%',
        aspectRatio:  '3/4',
        borderRadius: '16px',
        overflow:     'hidden',
        border:       '1px solid var(--border)',
        zIndex:       1,
      }}>
        <Image
          src="/photo.jpg"
          alt="Emmanuel Attindogbe — Développeur d'Applications & Systèmes"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
          sizes="(max-width: 900px) 100vw, 320px"
        />
      </div>

      {/* Badge flottant */}
      <div style={{
        position:     'absolute',
        bottom:       '-16px',
        right:        '-16px',
        zIndex:       2,
        padding:      '0.5rem 0.85rem',
        borderRadius: '999px',
        border:       '1px solid var(--border)',
        background:   'var(--surface-1)',
        backdropFilter: 'blur(8px)',
        display:      'flex',
        alignItems:   'center',
        gap:          '0.4rem',
        fontSize:     '0.72rem',
        color:        'var(--accent-start)',
        fontWeight:   600,
        whiteSpace:   'nowrap',
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: 'var(--accent-start)',
          boxShadow: '0 0 6px var(--accent-start)',
          display: 'inline-block',
        }} />
        Open to work
      </div>
    </div>
  );
}

// ════════════════════════════════════════════
// COMPOSANT PRINCIPAL
// ════════════════════════════════════════════
export default function HeroView({ featuredProjects, experiences }: Props) {
  const tHero   = useTranslations('hero');
  const tIntro  = useTranslations('intro');
  const tProj   = useTranslations('projects');
  const tParc   = useTranslations('parcours');
  const tCta    = useTranslations('cta_section');

  const introRef    = useRef<HTMLDivElement>(null);
  const isInView    = useInView(introRef, { once: true, margin: '-80px' });
  const photoCtrl   = useAnimationControls();
  const textCtrl    = useAnimationControls();

  // ── Séquence stricte : photo PUIS texte ──
  useEffect(() => {
    if (!isInView) return;
    const sequence = async () => {
      await photoCtrl.start({
        opacity: 1, x: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
      });
      await textCtrl.start({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      });
    };
    sequence();
  }, [isInView, photoCtrl, textCtrl]);

  return (
    <div style={{ paddingBottom: '6rem' }}>

      {/* ══════════════════════════════════
          SECTION 1 — HERO PRINCIPAL
      ══════════════════════════════════ */}
      <section style={{
        position:       'relative',
        minHeight:      'calc(100vh - var(--header-height))',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        paddingBlock:   'clamp(2rem, 5vw, 4rem)',
        overflow:       'hidden',
      }}>
        {/* Fond grille + glow */}
        <div style={{
          position: 'absolute', inset: 0,
          zIndex: 0, pointerEvents: 'none',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          }} />
          <div style={{
            position:     'absolute',
            top:          '-15%',
            left:         '50%',
            transform:    'translateX(-50%)',
            width:        '700px',
            height:       '500px',
            borderRadius: '50%',
            background:   'radial-gradient(ellipse, var(--accent-glow) 0%, transparent 65%)',
            filter:       'blur(50px)',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              gap:           '0.5rem',
              padding:       '0.3rem 0.9rem',
              borderRadius:  '999px',
              border:        '1px solid var(--border)',
              background:    'var(--surface-1)',
              marginBottom:  '2.5rem',
              fontSize:      '0.75rem',
              color:         'var(--text-secondary)',
              letterSpacing: '0.04em',
            }}
          >
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--accent-start)',
              boxShadow: '0 0 8px var(--accent-start)',
              display: 'inline-block',
            }} />
            {tHero('badge')}
          </motion.div>

          {/* Layout Hero : Titre + Terminal */}
          <div className="hero-top-grid">

            {/* GAUCHE — Typographie massive */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize:      'clamp(2.8rem, 6vw, 5rem)',
                  fontWeight:    800,
                  letterSpacing: '-0.04em',
                  lineHeight:    1.0,
                  marginBottom:  '0.35rem',
                  color:         'var(--text-primary)',
                }}
              >
                {tHero('title1')}
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                style={{
                  fontSize:      'clamp(2.8rem, 6vw, 5rem)',
                  fontWeight:    800,
                  letterSpacing: '-0.04em',
                  lineHeight:    1.0,
                  marginBottom:  '1.5rem',
                  background:    'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor:  'transparent',
                  backgroundClip:       'text',
                }}
              >
                {tHero('title2')}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.44 }}
                style={{
                  display:    'flex',
                  alignItems: 'center',
                  gap:        '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                <TerminalIcon size={14} style={{ color: 'var(--accent-start)' }} />
                <p style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      'clamp(0.8rem, 1.2vw, 0.95rem)',
                  color:         'var(--text-secondary)',
                  letterSpacing: '0.04em',
                }}>
                  {tHero('role')}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.54 }}
                style={{
                  fontSize:     'clamp(0.9rem, 1.2vw, 1rem)',
                  color:        'var(--text-secondary)',
                  maxWidth:     '440px',
                  lineHeight:   1.75,
                  marginBottom: '2.5rem',
                }}
              >
                {tHero('description')}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="hero-cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  display:  'flex',
                  gap:      '0.85rem',
                  flexWrap: 'wrap',
                  width:    '100%',
                }}
              >
                <Link href="/projects" style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '0.45rem',
                  padding:        '0.7rem 1.5rem',
                  borderRadius:   '8px',
                  background:     'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
                  color:          '#000',
                  fontWeight:     700,
                  fontSize:       '0.875rem',
                  textDecoration: 'none',
                }}>
                  {tHero('cta_projects')} <ArrowRight size={15} />
                </Link>

                <Link href="/contact" style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '0.45rem',
                  padding:        '0.7rem 1.5rem',
                  borderRadius:   '8px',
                  border:         '1px solid var(--border-hover)',
                  background:     'var(--surface-1)',
                  color:          'var(--text-primary)',
                  fontWeight:     500,
                  fontSize:       '0.875rem',
                  textDecoration: 'none',
                }}>
                  <Mail size={14} /> {tHero('cta_contact')}
                </Link>
              </motion.div>
            </div>

            {/* DROITE — Terminal */}
            <motion.div
              className="hero-terminal-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              style={{
                display:        'flex',
                justifyContent: 'flex-end',
                alignItems:     'center',
              }}
            >
              <HeroTerminal />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            style={{
              display:       'flex',
              flexDirection: 'column',
              alignItems:    'center',
              marginTop:     '4rem',
              color:         'var(--text-muted)',
            }}
          >
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2 — TECH MARQUEE
      ══════════════════════════════════ */}
      <TechMarquee />

      {/* ══════════════════════════════════
          SECTION 3 — L'HUMAIN (Intro)
      ══════════════════════════════════ */}
      <section ref={introRef} style={{ paddingBlock: 'clamp(3rem, 6vw, 6rem)' }}>
        <div className="intro-grid" style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:                 '5rem',
          alignItems:          'center',
          width:               '100%',
        }}>

          {/* Photo — arrive EN PREMIER */}
          <motion.div
            className="developer-photo-wrapper"
            initial={{ opacity: 0, x: -60 }}
            animate={photoCtrl}
            style={{
              display:        'flex',
              justifyContent: 'center',
            }}
          >
            <DeveloperPhoto />
          </motion.div>

          {/* Texte — arrive APRÈS la photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={textCtrl}
            style={{
              display:       'flex',
              flexDirection: 'column',
              gap:           '1.75rem',
              justifyContent: 'center',
            }}
          >
            {/* Label */}
            <div style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '0.6rem',
            }}>
              <span style={{
                width: 28, height: 1,
                background: 'linear-gradient(90deg, var(--accent-start), transparent)',
                display: 'inline-block',
              }} />
              <span style={{
                fontSize:      '0.72rem',
                fontWeight:    600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:         'var(--accent-start)',
              }}>
                {tIntro('label')}
              </span>
            </div>

            {/* Texte principal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                tIntro('line1'),
                tIntro('line2'),
                tIntro('line3'),
              ].map((sentence, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={textCtrl}
                  transition={{ delay: i * 0.18 }}
                  style={{
                    fontSize:   i === 0
                      ? 'clamp(1.2rem, 2vw, 1.5rem)'
                      : 'clamp(0.95rem, 1.2vw, 1.05rem)',
                    fontWeight: i === 0 ? 700 : 400,
                    color:      i === 0
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)',
                    lineHeight: 1.7,
                    letterSpacing: i === 0 ? '-0.02em' : 'normal',
                  }}
                >
                  {sentence}
                </motion.p>
              ))}
            </div>

            {/* Métriques */}
            <div style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '1px',
              background:          'var(--border)',
              borderRadius:        '10px',
              overflow:            'hidden',
              border:              '1px solid var(--border)',
              maxWidth:            '100%',
            }}>
              {[
                { value: tIntro('stat1_value'), label: tIntro('stat1_label') },
                { value: tIntro('stat2_value'), label: tIntro('stat2_label') },
                { value: tIntro('stat3_value'), label: tIntro('stat3_label') },
              ].map(({ value, label }) => (
                <div key={label} style={{
                  padding:    '1rem',
                  background: 'var(--surface-1)',
                  textAlign:  'center',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize:   '1.6rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor:  'transparent',
                    backgroundClip:       'text',
                    marginBottom: '0.2rem',
                  }}>
                    {value}
                  </p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/about" style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            '0.4rem',
              fontSize:       '0.875rem',
              color:          'var(--accent-start)',
              textDecoration: 'none',
              fontWeight:     500,
              width:          'fit-content',
            }}>
              {tIntro('cta')} <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 4 — PROJETS PHARES
      ══════════════════════════════════ */}
      <section style={{ paddingBlock: 'clamp(2.5rem, 5vw, 5rem)' }}>

        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'flex-end',
            marginBottom:   '2.5rem',
            flexWrap:       'wrap',
            gap:            '1rem',
          }}
        >
          <div>
            <p style={{
              fontSize:      '0.72rem',
              fontWeight:    600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         'var(--accent-start)',
              marginBottom:  '0.4rem',
            }}>
              {tProj('section_label')}
            </p>
            <h2 style={{
              fontSize:      'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight:    700,
              letterSpacing: '-0.03em',
              color:         'var(--text-primary)',
            }}>
              {tProj('section_title')} <span className="gradient-text">{tProj('section_highlight')}</span>
            </h2>
          </div>
          <Link href="/projects" style={{
            display:        'inline-flex',
            alignItems:     'center',
            gap:            '0.4rem',
            fontSize:       '0.825rem',
            color:          'var(--text-secondary)',
            textDecoration: 'none',
            fontWeight:     500,
            transition:     'color var(--transition-fast)',
          }}>
            {tProj('see_all')} <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Cards projets */}
        <div className="featured-projects-grid">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.15, ease: 'easeOut' as const }}
              style={{
                position:      'relative',
                padding:       '2rem',
                borderRadius:  '14px',
                border:        '1px solid var(--border)',
                background:    'var(--surface-1)',
                overflow:      'hidden',
                display:       'flex',
                flexDirection: 'column',
                gap:           '1.5rem',
                height:        '100%',
              }}
            >
              {/* Glow décoratif */}
              <div style={{
                position:     'absolute',
                top:          '-50px', right: '-50px',
                width:        '180px', height: '180px',
                borderRadius: '50%',
                background:   'radial-gradient(circle, var(--accent-glow), transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Header carte */}
              <div>
                <div style={{
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '0.5rem',
                  marginBottom:  '0.75rem',
                  flexWrap:      'wrap',
                }}>
                  <span style={{
                    fontSize:      '0.68rem',
                    fontWeight:    600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color:         'var(--accent-start)',
                    padding:       '0.18rem 0.55rem',
                    borderRadius:  '4px',
                    border:        '1px solid var(--accent-start)35',
                    background:    'var(--accent-start)0a',
                  }}>
                    {project.context}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {project.period}
                  </span>
                </div>

                <h3 style={{
                  fontSize:      'clamp(1.05rem, 1.5vw, 1.3rem)',
                  fontWeight:    700,
                  letterSpacing: '-0.02em',
                  color:         'var(--text-primary)',
                  marginBottom:  '0.6rem',
                  lineHeight:    1.25,
                }}>
                  {project.title}
                </h3>

                <p style={{
                  fontSize:   '0.875rem',
                  color:      'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {project.shortDesc}
                </p>
              </div>

              {/* Impact metric */}
              <div style={{
                padding:      '0.85rem 1rem',
                borderRadius: '8px',
                border:       '1px solid var(--accent-start)20',
                background:   'var(--accent-start)07',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize:   '0.825rem',
                  fontWeight: 600,
                  color:      'var(--accent-start)',
                  lineHeight: 1.5,
                }}>
                  {project.impact[0]}
                </p>
              </div>

              {/* Tech stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} style={{
                    fontFamily:   'var(--font-mono)',
                    fontSize:     '0.68rem',
                    padding:      '0.18rem 0.5rem',
                    borderRadius: '4px',
                    border:       '1px solid var(--border)',
                    color:        'var(--text-muted)',
                    background:   'var(--surface-2)',
                  }}>
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize:   '0.68rem',
                    padding:    '0.18rem 0.5rem',
                    color:      'var(--text-muted)',
                  }}>
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Lien */}
              <Link href="/projects" style={{
                display:        'inline-flex',
                alignItems:     'center',
                gap:            '0.35rem',
                fontSize:       '0.8rem',
                color:          'var(--accent-start)',
                textDecoration: 'none',
                fontWeight:     500,
                marginTop:      'auto',
              }}>
                {tProj('see_project')} <ArrowRight size={13} />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 5 — PARCOURS (Preview)
      ══════════════════════════════════ */}
      <section style={{
        paddingBlock: 'clamp(2.5rem, 5vw, 5rem)',
        borderTop:    '1px solid var(--border)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <p style={{
            fontSize:      '0.72rem',
            fontWeight:    600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color:         'var(--accent-start)',
            marginBottom:  '0.4rem',
          }}>
            {tParc('section_label')}
          </p>
          <h2 style={{
            fontSize:      'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight:    700,
            letterSpacing: '-0.03em',
          }}>
            {tParc('section_title')} <span className="gradient-text">{tParc('section_highlight')}</span>
          </h2>
        </motion.div>

        <div style={{
          display:       'flex',
          flexDirection: 'column',
          gap:           '0',
          position:      'relative',
          paddingLeft:   '1.5rem',
        }}>
          {/* Ligne verticale */}
          <div style={{
            position:   'absolute',
            left:       '7px',
            top:        '8px',
            bottom:     '8px',
            width:      '1px',
            background: 'linear-gradient(to bottom, var(--accent-start), transparent)',
          }} />

          {experiences.slice(0, 3).map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.12, ease: 'easeOut' as const }}
              style={{
                position:     'relative',
                paddingBottom: i < 2 ? '1.75rem' : 0,
              }}
            >
              {/* Point timeline */}
              <div style={{
                position:     'absolute',
                left:         '-1.5rem',
                top:          '0.35rem',
                width:        '8px',
                height:       '8px',
                borderRadius: '50%',
                background:   'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
                boxShadow:    '0 0 8px var(--accent-glow)',
              }} />

              <div style={{
                display:     'flex',
                justifyContent: 'space-between',
                alignItems:  'flex-start',
                flexWrap:    'wrap',
                gap:         '0.5rem',
              }}>
                <div>
                  <p style={{
                    fontSize:   '0.9rem',
                    fontWeight: 600,
                    color:      'var(--text-primary)',
                    marginBottom: '0.15rem',
                  }}>
                    {exp.role}
                  </p>
                  <p style={{
                    fontSize:   '0.825rem',
                    color:      'var(--accent-start)',
                    fontWeight: 500,
                  }}>
                    {exp.company}
                  </p>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize:   '0.72rem',
                  color:      'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}>
                  {exp.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{ marginTop: '2rem' }}
        >
          <Link href="/parcours" style={{
            display:        'inline-flex',
            alignItems:     'center',
            gap:            '0.4rem',
            fontSize:       '0.875rem',
            color:          'var(--text-secondary)',
            textDecoration: 'none',
            fontWeight:     500,
          }}>
            {tParc('see_full')} <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* ══════════════════════════════════
          SECTION 6 — CTA FINAL
      ══════════════════════════════════ */}
      <section style={{
        paddingBlock: 'clamp(2.5rem, 5vw, 5rem)',
        borderTop:    '1px solid var(--border)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{
            position:     'relative',
            padding:      'clamp(2.5rem, 5vw, 4rem)',
            borderRadius: '16px',
            border:       '1px solid var(--border)',
            background:   'var(--surface-1)',
            overflow:     'hidden',
            textAlign:    'center',
          }}
        >
          {/* Glow central */}
          <div style={{
            position:     'absolute',
            top:          '50%', left: '50%',
            transform:    'translate(-50%, -50%)',
            width:        '400px', height: '200px',
            borderRadius: '50%',
            background:   'radial-gradient(ellipse, var(--accent-glow), transparent 70%)',
            filter:       'blur(40px)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{
              fontSize:      '0.72rem',
              fontWeight:    600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         'var(--accent-start)',
              marginBottom:  '1rem',
            }}>
              {tCta('label')}
            </p>

            <h2 style={{
              fontSize:      'clamp(1.8rem, 4vw, 3rem)',
              fontWeight:    800,
              letterSpacing: '-0.03em',
              lineHeight:    1.15,
              marginBottom:  '1.25rem',
              color:         'var(--text-primary)',
            }}>
              {tCta('title')}<br />
              <span className="gradient-text">{tCta('highlight')}</span>
            </h2>

            <p style={{
              fontSize:     'clamp(0.9rem, 1.2vw, 1rem)',
              color:        'var(--text-secondary)',
              maxWidth:     '480px',
              margin:       '0 auto 2.5rem',
              lineHeight:   1.75,
            }}>
              {tCta('description')}
            </p>

            <div style={{
              display:        'flex',
              gap:            '1rem',
              justifyContent: 'center',
              flexWrap:       'wrap',
            }}>
              <Link href="/contact" style={{
                display:        'inline-flex',
                alignItems:     'center',
                gap:            '0.5rem',
                padding:        '0.8rem 1.75rem',
                borderRadius:   '8px',
                background:     'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
                color:          '#000',
                fontWeight:     700,
                fontSize:       '0.9rem',
                textDecoration: 'none',
              }}>
                <Mail size={15} />
                {tCta('btn_contact')}
              </Link>

              <a href="/cv.pdf" download style={{
                display:        'inline-flex',
                alignItems:     'center',
                gap:            '0.5rem',
                padding:        '0.8rem 1.75rem',
                borderRadius:   '8px',
                border:         '1px solid var(--border-hover)',
                background:     'var(--surface-2)',
                color:          'var(--text-primary)',
                fontWeight:     500,
                fontSize:       '0.9rem',
                textDecoration: 'none',
              }}>
                <Download size={15} />
                {tCta('btn_cv')}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Responsive */}
      <style>{`
        .featured-projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .hero-top-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .intro-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 5rem;
          align-items: center;
          width: 100%;
        }
        @media (max-width: 900px) {
          .hero-top-grid {
            grid-template-columns: 1fr !important;
          }
          .intro-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 768px) {
          .marquee-icon-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .hero-top-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .intro-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .featured-projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .hero-terminal-wrapper {
            display: none !important;
          }
          .scroll-indicator {
            display: none !important;
          }
          .hero-cta-buttons a {
            flex: 1;
            justify-content: center;
            text-align: center;
          }
          .developer-photo-wrapper {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
