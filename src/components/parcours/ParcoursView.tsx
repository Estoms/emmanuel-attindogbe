'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Calendar, MapPin, GraduationCap,
  Terminal, Briefcase, ChevronRight, Heart,
} from 'lucide-react';
import type { Experience, SkillCategory, Education } from '@/types';

type Props = {
  experiences:     Experience[];
  skillCategories: SkillCategory[];
  education:       Education[];
  softSkills:      string[];
};

// Niveaux → couleur badge
const levelColor: Record<string, string> = {
  expert:        'var(--accent-start)',
  avancé:        'var(--accent-end)',
  intermédiaire: 'var(--text-secondary)',
  débutant:      'var(--text-muted)',
};

// Variants framer-motion
const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function ParcoursView({ experiences, skillCategories, education, softSkills }: Props) {
  const t = useTranslations('parcours');

  return (
    <div style={{ paddingBlock: '3rem' }}>

      {/* ── TITRE ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '3.5rem' }}
      >
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          marginBottom: '0.75rem',
        }}>
          {t('page_title')} <span className="gradient-text">{t('page_highlight')}</span>
        </h1>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          maxWidth: '520px',
          lineHeight: 1.7,
        }}>
          {t('page_description')}
        </p>
      </motion.div>

      {/* ── SPLIT SCREEN ── */}
      <div className="parcours-grid">

        {/* ════════ COLONNE GAUCHE — TIMELINE ════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

          {/* Label section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
            <Terminal size={16} style={{ color: 'var(--accent-start)' }} />
            <h2 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              {t('skills_label')}
            </h2>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>

            {/* Ligne verticale */}
            <div style={{
              position: 'absolute',
              left: '7px',
              top: '8px',
              bottom: '8px',
              width: '1px',
              background: 'linear-gradient(to bottom, var(--accent-start), transparent)',
            }} />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                style={{ position: 'relative', marginBottom: i < experiences.length - 1 ? '2rem' : 0 }}
              >
                {/* Point timeline */}
                <div style={{
                  position: 'absolute',
                  left: '-1.5rem',
                  top: '1.25rem',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
                  boxShadow: '0 0 8px var(--accent-glow)',
                  zIndex: 1,
                }} />

                {/* Carte expérience */}
                <article style={{
                  padding: '1.5rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-1)',
                  transition: 'border-color var(--transition-base)',
                }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem',
                  }}>
                    <div>
                      <h3 style={{ fontSize: '0.975rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                        {exp.role}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--accent-start)', fontWeight: 500 }}>
                        {exp.company}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        <Calendar size={11} />{exp.period}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        <MapPin size={11} />{exp.location}
                      </span>
                    </div>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.25rem' }}>
                    {exp.points.map((point, j) => (
                      <li key={j} style={{
                        display: 'flex', gap: '0.5rem',
                        fontSize: '0.845rem', color: 'var(--text-secondary)', lineHeight: 1.65,
                      }}>
                        <ChevronRight size={13} style={{ color: 'var(--accent-start)', marginTop: '0.3rem', flexShrink: 0 }} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {exp.tags.map((tag) => (
                      <span key={tag} style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        padding: '0.18rem 0.55rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border)',
                        color: 'var(--text-muted)',
                        background: 'var(--surface-2)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          {/* ── SOFT SKILLS ── */}
          <div style={{ marginTop: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <Heart size={16} style={{ color: 'var(--accent-start)' }} />
              <h2 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                {t('softskills_label')}
              </h2>
              <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '0.65rem',
            }}>
              {softSkills.map((skill) => (
                <div key={skill} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-1)',
                  fontSize: '0.845rem',
                  color: 'var(--text-secondary)',
                }}>
                  <span style={{
                    width: 6, height: 6,
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: 'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
                  }} />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* ── FORMATION (sous la timeline) ── */}
          <div style={{ marginTop: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <GraduationCap size={16} style={{ color: 'var(--accent-start)' }} />
              <h2 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                {t('formation_label')}
              </h2>
              <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={cardVariants}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                    flexWrap: 'wrap', gap: '0.5rem',
                    padding: '1rem 1.25rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--surface-1)',
                  }}
                >
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                      {edu.degree}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--accent-start)' }}>{edu.institution}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{edu.location}</p>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', whiteSpace: 'nowrap' }}>
                    <Calendar size={11} />{edu.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════ COLONNE DROITE — STACK STICKY ════════ */}
        <aside className="parcours-aside">
          <div style={{
            position: 'sticky',
            top: 'calc(var(--header-height) + 2rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Terminal size={16} style={{ color: 'var(--accent-start)' }} />
              <h2 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Stack Technique
              </h2>
            </div>

            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  padding: '1.1rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-1)',
                }}
              >
                <p style={{
                  fontSize: '0.75rem', fontWeight: 600,
                  color: 'var(--text-secondary)', marginBottom: '0.75rem',
                  letterSpacing: '0.04em',
                }}>
                  {cat.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {cat.skills.map((skill) => (
                    <span key={skill.name} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      border: `1px solid ${levelColor[skill.level]}40`,
                      color: levelColor[skill.level],
                      background: `${levelColor[skill.level]}0d`,
                      whiteSpace: 'nowrap',
                    }}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </aside>

      </div>

      {/* ── RESPONSIVE ── */}
      <style>{`
        .parcours-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 3.5rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .parcours-grid { grid-template-columns: 1fr !important; }
          .parcours-aside { order: -1; }
        }
      `}</style>
    </div>
  );
}
