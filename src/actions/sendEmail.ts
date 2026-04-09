'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type SendEmailState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export async function sendEmail(
  prevState: SendEmailState,
  formData: FormData,
): Promise<SendEmailState> {

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !subject || !message) {
    return { status: 'error', message: 'Tous les champs sont obligatoires.' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'Adresse email invalide.' };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <contact@attindogbe.com>',
      to: [process.env.CONTACT_EMAIL as string],
      replyTo: email,
      subject: `[Portfolio] ${subject} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;padding:32px;border-radius:12px;">
          <h2 style="color:#22d3ee;border-bottom:1px solid #222;padding-bottom:12px;margin-top:0;">
            Nouveau message depuis le portfolio
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#666;width:80px;vertical-align:top;">Nom</td>
              <td style="padding:8px 0;color:#fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666;vertical-align:top;">Email</td>
              <td style="padding:8px 0;">
                <a href="mailto:${email}" style="color:#22d3ee;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666;vertical-align:top;">Sujet</td>
              <td style="padding:8px 0;color:#fff;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#111;border-radius:8px;border-left:3px solid #22d3ee;">
            <p style="color:#666;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:.05em;">Message</p>
            <p style="color:#e5e5e5;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="margin-top:24px;color:#444;font-size:11px;">
            Envoyé depuis le portfolio — Emmanuel Attindogbe
          </p>
        </div>
      `,
    });

    return { status: 'success', message: 'Message envoyé avec succès ! Je vous répondrai sous 24h.' };

  } catch (error) {
    console.error('[sendEmail error]', error);
    return { status: 'error', message: 'Une erreur est survenue. Réessayez ou contactez-moi directement par email.' };
  }
}
