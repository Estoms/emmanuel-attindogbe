'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Terminal, Zap, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';

type Props = { projects: Project[] };

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

export default function ProjectsView({ projects }: Props) {
  const t = useTranslations('projects');

  const featured  = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <div style={{ paddingBlock: 'clamp(1.5rem, 4vw, 3rem)' }}>

      {/* ── TITRE ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '4rem' }}
      >
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          marginBottom: '0.75rem',
        }}>
          {t('page_title')} <span className="gradient-text">{t('page_highlight')}</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '540px', lineHeight: 1.7 }}>
          {t('page_description')}
        </p>
      </motion.div>

      {/* ════════ FEATURED — GRANDES CARTES ════════ */}
      <section style={{ marginBottom: '5rem' }}>
        <SectionLabel label={`${t('section_title')} ${t('section_highlight')}`} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={cardVariants}
              style={{
                position: 'relative',
                padding: '2.5rem',
                borderRadius: '14px',
                border: '1px solid var(--border)',
                background: 'var(--surface-1)',
                overflow: 'hidden',
              }}
            >
              {/* Glow décoratif */}
              <div style={{
                position: 'absolute', top: '-60px', right: '-60px',
                width: '220px', height: '220px', borderRadius: '50%',
                background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div className="project-featured-grid">

                {/* GAUCHE — Infos */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: 'var(--accent-start)',
                        padding: '0.2rem 0.6rem', borderRadius: '4px',
                        border: '1px solid var(--accent-start)40', background: 'var(--accent-start)0d',
                      }}>
                        {project.context}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.period}</span>
                    </div>

                    <h2 style={{
                      fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 700,
                      letterSpacing: '-0.02em', color: 'var(--text-primary)',
                      marginBottom: '0.75rem', lineHeight: 1.25,
                    }}>
                      {project.title}
                    </h2>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem' }}>
                      <Terminal size={12} style={{ color: 'var(--text-muted)' }} />
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        Stack
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.techStack.map((tech) => (
                        <span key={tech} style={{
                          fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                          padding: '0.22rem 0.6rem', borderRadius: '4px',
                          border: '1px solid var(--border)', color: 'var(--text-secondary)', background: 'var(--surface-2)',
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Liens */}
                  {(project.links?.github || project.links?.live) && (
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      {project.links?.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                          <Github size={14} /> Code
                        </a>
                      )}
                      {project.links?.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--accent-start)', textDecoration: 'none' }}>
                          <ExternalLink size={14} /> Voir le projet
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* DROITE — Impact Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                    <Zap size={13} style={{ color: 'var(--accent-start)' }} />
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Impact & Résultats
                    </span>
                  </div>

                  {project.impact.map((metric) => (
                    <div key={metric} style={{
                      padding: '0.9rem 1.1rem', borderRadius: '8px',
                      border: '1px solid var(--accent-start)25', background: 'var(--accent-start)08',
                    }}>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-start)', lineHeight: 1.4 }}>
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ════════ SECONDARY — GRILLE COMPACTE ════════ */}
      {secondary.length > 0 && (
        <section>
          <SectionLabel label={t('other_projects')} />

          <div className="projects-secondary-grid" style={{ marginTop: '2rem' }}>
            {secondary.map((project, i) => (
              <motion.article
                key={project.id}
                custom={i + featured.length}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                style={{
                  padding: '1.75rem', borderRadius: '12px',
                  border: '1px solid var(--border)', background: 'var(--surface-1)',
                  display: 'flex', flexDirection: 'column', gap: '1.25rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {project.period}
                    </span>
                    <ArrowUpRight size={14} style={{ color: 'var(--text-muted)' }} />
                  </div>

                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '0.845rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {project.shortDesc}
                  </p>
                </div>

                {/* Impact highlight */}
                <div style={{ padding: '0.7rem 0.9rem', borderRadius: '6px', border: '1px solid var(--accent-start)20', background: 'var(--accent-start)06' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-start)', fontWeight: 500 }}>
                    {project.impact[0]}
                  </p>
                </div>

                {/* Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {project.techStack.map((tech) => (
                    <span key={tech} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                      padding: '0.18rem 0.5rem', borderRadius: '4px',
                      border: '1px solid var(--border)', color: 'var(--text-muted)', background: 'var(--surface-2)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* ── RESPONSIVE ── */}
      <style>{`
        .project-featured-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .projects-secondary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        @media (max-width: 768px) {
          .project-featured-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .projects-secondary-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        {label}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  );
}
