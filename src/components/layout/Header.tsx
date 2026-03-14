'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ThemeToggle from '@/components/layout/ThemeToggle';
import LocaleSwitcher from '@/components/layout/LocaleSwitcher';

export default function Header() {
  const pathname  = usePathname();
  const t         = useTranslations('nav');
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  const navItems = [
    { label: t('projects'),  href: '/projects'  },
    { label: t('parcours'),  href: '/parcours'  },
    { label: t('about'),     href: '/about'     },
    { label: t('contact'),   href: '/contact'   },
    { label: t('cv'),        href: '/cv'        },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu au changement de route
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Bloque le scroll body quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) => {
    const localePath = pathname.replace(/^\/(fr|en)/, '') || '/';
    return localePath === href;
  };

  return (
    <>
      <header style={{
        position:        'fixed',
        top:             0,
        left:            0,
        right:           0,
        zIndex:          50,
        height:          'var(--header-height)',
        borderBottom:    `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        backgroundColor: scrolled ? 'var(--header-bg-scrolled)' : 'transparent',
        backdropFilter:  scrolled ? 'blur(12px)' : 'none',
        transition:      'background-color var(--transition-base), border-color var(--transition-base)',
      }}>
        <div className="container" style={{
          height:         '100%',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
        }}>

          {/* ── LOGO ── */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontSize:      '0.85rem',
              fontWeight:    700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              background:    'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip:       'text',
            }}>
              E. Attindogbe
            </span>
          </Link>

          {/* ── NAV DESKTOP (caché sur mobile) ── */}
          <nav className="header-desktop-nav" style={{
            display:    'flex',
            alignItems: 'center',
            gap:        '2.5rem',
          }}>
            <ul style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '2rem',
              listStyle:  'none',
            }}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{
                    fontSize:       '0.875rem',
                    fontWeight:     isActive(item.href) ? 500 : 400,
                    color:          isActive(item.href)
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition:     'color var(--transition-fast)',
                    position:       'relative',
                    paddingBottom:  '2px',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.color = 'var(--text-primary)')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.color = isActive(item.href)
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)')
                  }
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span style={{
                        position:     'absolute',
                        bottom:       '-2px',
                        left:         0,
                        right:        0,
                        height:       '1px',
                        background:   'linear-gradient(90deg, var(--accent-start), var(--accent-end))',
                        borderRadius: '999px',
                      }} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <LocaleSwitcher />
            <ThemeToggle />

            {/* Bouton CV */}
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"
              style={{
                display:        'flex',
                alignItems:     'center',
                gap:            '0.45rem',
                padding:        '0.5rem 1.1rem',
                borderRadius:   '6px',
                border:         '1px solid var(--accent-start)',
                background:     'transparent',
                color:          'var(--accent-start)',
                fontWeight:     600,
                fontSize:       '0.825rem',
                letterSpacing:  '0.04em',
                textDecoration: 'none',
                transition:     'background var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background  = 'var(--accent-start)';
                e.currentTarget.style.color        = '#000';
                e.currentTarget.style.boxShadow   = '0 0 18px var(--accent-glow)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background  = 'transparent';
                e.currentTarget.style.color        = 'var(--accent-start)';
                e.currentTarget.style.boxShadow   = 'none';
              }}
            >
              <FileText size={13} />
              CV
            </a>
          </nav>

          {/* ── DROITE MOBILE : toggles + burger ── */}
          <div className="header-mobile-controls" style={{
            display:    'none',
            alignItems: 'center',
            gap:        '0.5rem',
          }}>
            <LocaleSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display:    'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width:      '34px',
                height:     '34px',
                borderRadius: '8px',
                border:     '1px solid var(--border)',
                background: 'var(--surface-1)',
                color:      'var(--text-primary)',
                cursor:     'pointer',
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* ── OVERLAY MENU MOBILE ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position:   'fixed',
                inset:      0,
                zIndex:     40,
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(4px)',
              }}
            />

            {/* Panel menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                position:      'fixed',
                top:           0,
                right:         0,
                bottom:        0,
                width:         'min(320px, 85vw)',
                zIndex:        49,
                background:    'var(--surface-1)',
                borderLeft:    '1px solid var(--border)',
                display:       'flex',
                flexDirection: 'column',
                padding:       '5rem 2rem 2rem',
                gap:           '0.5rem',
              }}
            >
              {/* Liens nav */}
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    href={item.href}
                    style={{
                      display:        'block',
                      padding:        '0.85rem 1rem',
                      borderRadius:   '8px',
                      fontSize:       '1rem',
                      fontWeight:     isActive(item.href) ? 600 : 400,
                      color:          isActive(item.href)
                        ? 'var(--accent-start)'
                        : 'var(--text-secondary)',
                      textDecoration: 'none',
                      background:     isActive(item.href)
                        ? 'var(--accent-start)0d'
                        : 'transparent',
                      borderLeft:     isActive(item.href)
                        ? '2px solid var(--accent-start)'
                        : '2px solid transparent',
                      transition:     'all var(--transition-fast)',
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Séparateur */}
              <div style={{
                height:     '1px',
                background: 'var(--border)',
                margin:     '1rem 0',
              }} />

              {/* Bouton CV */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.06, duration: 0.25 }}
              >
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    gap:            '0.5rem',
                    padding:        '0.85rem',
                    borderRadius:   '8px',
                    border:         '1px solid var(--accent-start)',
                    background:     'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
                    color:          '#000',
                    fontWeight:     700,
                    fontSize:       '0.9rem',
                    textDecoration: 'none',
                  }}
                >
                  <FileText size={15} />
                  Télécharger le CV
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── RESPONSIVE CSS ── */}
      <style>{`
        @media (max-width: 768px) {
          .header-desktop-nav   { display: none !important; }
          .header-mobile-controls { display: flex !important; }
        }
      `}</style>
    </>
  );
}
