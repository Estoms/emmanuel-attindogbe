'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/layout/ThemeToggle';
import LocaleSwitcher from '@/components/layout/LocaleSwitcher';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Projets',  href: '/projects' },
  { label: 'Parcours', href: '/parcours' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact',  href: '/contact' },
  { label: 'CV',       href: '/cv' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
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
            backgroundClip: 'text',
          }}>
            E. Attindogbe
          </span>
        </Link>

        {/* ── NAV DESKTOP ── */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}
             className="desktop-nav">

          <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none' }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize:       '0.875rem',
                      fontWeight:     isActive ? 500 : 400,
                      color:          isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition:     'color var(--transition-fast)',
                      position:       'relative',
                      paddingBottom:  '2px',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = isActive ? 'var(--text-primary)' : 'var(--text-secondary)')}
                  >
                    {item.label}
                    {isActive && (
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
              );
            })}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <LocaleSwitcher />
            <ThemeToggle />

            {/* ── BOUTON CV ── */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
                boxShadow:      '0 0 0px var(--accent-glow)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent-start)';
                e.currentTarget.style.color       = '#000';
                e.currentTarget.style.boxShadow  = '0 0 18px var(--accent-glow)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color       = 'var(--accent-start)';
                e.currentTarget.style.boxShadow  = '0 0 0px var(--accent-glow)';
              }}
            >
              <FileText size={13} />
              CV
            </a>
          </div>

        </nav>

        {/* ── BURGER MOBILE ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display:    'none',
            background: 'none',
            border:     'none',
            color:      'var(--text-primary)',
            cursor:     'pointer',
            padding:    '0.25rem',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── MENU MOBILE ── */}
      {menuOpen && (
        <div style={{
          position:        'absolute',
          top:             'var(--header-height)',
          left:            0,
          right:           0,
          backgroundColor: 'rgba(0,0,0,0.97)',
          borderBottom:    '1px solid var(--border)',
          backdropFilter:  'blur(12px)',
          padding:         '1.5rem',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} style={{
                  fontSize:       '1rem',
                  color:          pathname === item.href ? 'var(--accent-start)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontWeight:     pathname === item.href ? 500 : 400,
                }}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.5rem' }}>
                <LocaleSwitcher />
                <ThemeToggle />
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:        'inline-flex',
                    alignItems:     'center',
                    gap:            '0.4rem',
                    fontSize:       '0.875rem',
                    color:          'var(--accent-start)',
                    fontWeight:     600,
                    textDecoration: 'none',
                    border:         '1px solid var(--accent-start)',
                    padding:        '0.45rem 1rem',
                    borderRadius:   '6px',
                  }}
                >
                  <FileText size={14} />
                  Télécharger mon CV
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav     { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
