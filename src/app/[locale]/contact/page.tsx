import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return { title: t('contact_title') };
}

const contactLinks = [
  {
    label: 'emmanuel.attindogbe@outlook.fr',
    href:  'mailto:emmanuel.attindogbe@outlook.fr',
    icon:  Mail,
  },
  {
    label: 'linkedin.com/in/emmanuel-attindogbe',
    href:  'https://www.linkedin.com/in/emmanuel-attindogbe/',
    icon:  Linkedin,
  },
  {
    label: 'github.com/Estoms',
    href:  'https://github.com/Estoms',
    icon:  Github,
  },
];

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <div style={{
      minHeight: 'calc(100vh - var(--header-height))',
      display: 'flex', alignItems: 'center', paddingBlock: '4rem',
    }}>
      <div className="contact-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '5rem', width: '100%', alignItems: 'start',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.3rem 0.85rem', borderRadius: '999px',
            border: '1px solid var(--border)', width: 'fit-content',
            fontSize: '0.75rem', color: 'var(--accent-start)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              backgroundColor: 'var(--accent-start)',
              boxShadow: '0 0 8px var(--accent-start)', display: 'inline-block',
            }} />
            {t('badge')}
          </div>
          <div>
            <h1 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700,
              lineHeight: 1.2, letterSpacing: '-0.03em', marginBottom: '1.25rem',
            }}>
              {t('title')}{' '}
              <span className="gradient-text">{t('highlight')}</span>
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {t('subtitle')}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a key={href} href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: '0.75rem', padding: '0.85rem 1rem', borderRadius: '8px',
                  border: '1px solid var(--border)', background: 'var(--surface-1)',
                  color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem',
                }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Icon size={15} style={{ color: 'var(--accent-start)', flexShrink: 0 }} />
                  {label}
                </span>
                <ArrowUpRight size={13} style={{ opacity: 0.4, flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
