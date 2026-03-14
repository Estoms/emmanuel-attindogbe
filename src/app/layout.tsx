import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets:  ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets:  ['latin'],
});

const siteUrl = 'https://emmanuel-attindogbe.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:  'Emmanuel Attindogbe | Développeur d\'Applications & Systèmes',
    template: '%s | Emmanuel Attindogbe',
  },

  description:
    'Développeur Full Stack spécialisé en applications web et mobiles. ' +
    '3 stages terrain, 4 projets livrés. ' +
    'Passionné par le DevOps, la cybersécurité et le numérique responsable. ' +
    'Actuellement en Licence 3 Informatique à l\'Université de La Rochelle.',

  keywords: [
    'Emmanuel Attindogbe',
    'développeur full stack',
    'développeur web',
    'développeur applications',
    'Next.js',
    'React',
    'Node.js',
    'Python',
    'Android',
    'DevOps',
    'cybersécurité',
    'La Rochelle',
    'Bénin',
    'portfolio développeur',
  ],

  authors: [{ name: 'Emmanuel Attindogbe', url: siteUrl }],
  creator: 'Emmanuel Attindogbe',

  openGraph: {
    type:        'website',
    locale:      'fr_FR',
    url:         siteUrl,
    siteName:    'Emmanuel Attindogbe — Portfolio',
    title:       'Emmanuel Attindogbe | Développeur d\'Applications & Systèmes',
    description:
      'Développeur Full Stack — 3 stages terrain, 4 projets livrés. ' +
      'Spécialisé en web, mobile, DevOps et cybersécurité.',
    images: [
      {
        url:    '/og-image.png',
        width:  1200,
        height: 630,
        alt:    'Emmanuel Attindogbe — Portfolio',
      },
    ],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'Emmanuel Attindogbe | Développeur d\'Applications & Systèmes',
    description:
      'Développeur Full Stack — 3 stages terrain, 4 projets livrés.',
    images:      ['/og-image.png'],
  },

  robots: {
    index:          true,
    follow:         true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  icons: {
    icon:    '/favicon.ico',
    apple:   '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          display:         'flex',
          flexDirection:   'column',
          minHeight:       '100vh',
          backgroundColor: 'var(--background)',
          color:           'var(--foreground)',
        }}
      >
        <Header />
        <main className="container" style={{ paddingTop: 'calc(var(--header-height) + 2rem)', flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
