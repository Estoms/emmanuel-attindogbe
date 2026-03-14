import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import AboutView from '@/components/about/AboutView';
import { aboutData } from '@/data/about';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return { title: t('about_title') };
}

export default function AboutPage() {
  return <AboutView data={aboutData} />;
}
