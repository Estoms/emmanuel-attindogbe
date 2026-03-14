'use client';

import { useActionState, useEffect, useRef } from 'react';
import { sendEmail, type SendEmailState } from '@/actions/sendEmail';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const initialState: SendEmailState = { status: 'idle', message: '' };

const fieldStyle: React.CSSProperties = {
  background:   'var(--surface-2)',
  border:       '1px solid var(--border)',
  borderRadius: '6px',
  padding:      '0.7rem 1rem',
  color:        'var(--text-primary)',
  fontSize:     '0.9rem',
  outline:      'none',
  width:        '100%',
  fontFamily:   'var(--font-sans)',
  transition:   'border-color var(--transition-fast), box-shadow var(--transition-fast)',
};

const labelStyle: React.CSSProperties = {
  fontSize:      '0.78rem',
  color:         'var(--text-muted)',
  letterSpacing: '0.05em',
  textTransform: 'uppercase' as const,
};

export default function ContactForm() {
  const [state, action, isPending] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'success') formRef.current?.reset();
  }, [state.status]);

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--accent-start)';
    e.currentTarget.style.boxShadow   = '0 0 0 3px var(--accent-glow)';
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'var(--border)';
    e.currentTarget.style.boxShadow   = 'none';
  };

  return (
    <div style={{
      padding: '2rem', borderRadius: '12px',
      border: '1px solid var(--border)', background: 'var(--surface-1)',
      display: 'flex', flexDirection: 'column', gap: '1.5rem',
    }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
        Envoyer un message
      </h2>

      <form ref={formRef} action={action} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={labelStyle}>Nom</label>
          <input type="text" name="name" placeholder="Jean Dupont"
            required disabled={isPending} style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={labelStyle}>Email</label>
          <input type="email" name="email" placeholder="jean@example.com"
            required disabled={isPending} style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={labelStyle}>Sujet</label>
          <input type="text" name="subject" placeholder="Proposition de projet"
            required disabled={isPending} style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={labelStyle}>Message</label>
          <textarea name="message" placeholder="Décrivez votre projet ou votre besoin..."
            rows={5} required disabled={isPending}
            style={{ ...fieldStyle, resize: 'vertical' }}
            onFocus={onFocus} onBlur={onBlur} />
        </div>

        {/* Feedback état */}
        {state.status !== 'idle' && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.75rem 1rem', borderRadius: '6px',
            border: `1px solid ${state.status === 'success' ? 'rgba(34,211,238,0.25)' : 'rgba(239,68,68,0.25)'}`,
            background: state.status === 'success' ? 'rgba(34,211,238,0.06)' : 'rgba(239,68,68,0.06)',
            fontSize: '0.85rem',
            color: state.status === 'success' ? 'var(--accent-start)' : '#f87171',
          }}>
            {state.status === 'success' ? <CheckCircle size={15} /> : <AlertCircle size={15} />}
            {state.message}
          </div>
        )}

        {/* Submit */}
        <button type="submit" disabled={isPending} style={{
          width: '100%', padding: '0.85rem', borderRadius: '6px', border: 'none',
          background: isPending
            ? 'var(--surface-2)'
            : 'linear-gradient(135deg, var(--accent-start), var(--accent-end))',
          color: isPending ? 'var(--text-muted)' : '#000',
          fontWeight: 700, fontSize: '0.95rem',
          cursor: isPending ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          marginTop: '0.5rem',
        }}>
          {isPending ? (
            <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />Envoi en cours...</>
          ) : (
            <><Send size={15} />Envoyer le message</>
          )}
        </button>
      </form>

      <style>{`@keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }`}</style>
    </div>
  );
}
