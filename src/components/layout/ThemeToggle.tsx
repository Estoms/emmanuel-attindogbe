'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
      style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        width:          '34px',
        height:         '34px',
        borderRadius:   '8px',
        border:         '1px solid var(--border)',
        background:     'var(--surface-1)',
        color:          'var(--text-secondary)',
        cursor:         'pointer',
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
      {theme === 'dark'
        ? <Sun  size={15} />
        : <Moon size={15} />
      }
    </button>
  );
}
