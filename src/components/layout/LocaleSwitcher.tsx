'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const locale   = useLocale();
  const router   = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const next = locale === 'fr' ? 'en' : 'fr';
    // Retire le préfixe de locale s'il existe, sinon garde '/'
    const stripped = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), '') || '/';
    router.push(`/${next}${stripped === '/' ? '' : stripped}`);
  };

  return (
    <button
      onClick={toggleLocale}
      aria-label="Switch language"
      style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        height:         '34px',
        padding:        '0 0.75rem',
        borderRadius:   '8px',
        border:         '1px solid var(--border)',
        background:     'var(--surface-1)',
        color:          'var(--text-secondary)',
        cursor:         'pointer',
        fontSize:       '0.75rem',
        fontFamily:     'var(--font-mono)',
        fontWeight:     600,
        letterSpacing:  '0.06em',
        transition:     'border-color var(--transition-fast), color var(--transition-fast)',
        flexShrink:     0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent-start)';
        e.currentTarget.style.color       = 'var(--accent-start)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color       = 'var(--text-secondary)';
      }}
    >
      {locale === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}
