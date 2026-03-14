import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import PageTransition from '@/components/providers/PageTransition';
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default:  t('home_title'),
      template: `%s | Emmanuel Attindogbe`,
    },
    description: t('home_description'),
    keywords: [
      'Emmanuel Attindogbe',
      'développeur full stack',
      'developer',
      'Next.js', 'React', 'Python',
      'Android', 'DevOps',
    ],
    openGraph: {
      type:     'website',
      locale:   locale === 'fr' ? 'fr_FR' : 'en_US',
      url:      siteUrl,
      siteName: 'Emmanuel Attindogbe — Portfolio',
      title:    t('home_title'),
      description: t('home_description'),
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card:        'summary_large_image',
      title:       t('home_title'),
      description: t('home_description'),
      images:      ['/og-image.png'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'fr': `${siteUrl}/fr`,
        'en': `${siteUrl}/en`,
        'x-default': `${siteUrl}/fr`,
      },
    },
    robots: {
      index: true, follow: true,
    },
    icons: {
      icon: [
        { url: '/favicon.png', type: 'image/png' },
      ],
      apple: '/favicon.png',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params:   Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
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
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header />
            <main
              className="container"
              style={{
                paddingTop: 'calc(var(--header-height) + 2rem)',
                flex: 1,
              }}
            >
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
