import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import CvView from '@/components/cv/CvView';
import { aboutData } from '@/data/about';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return { title: t('cv_title') };
}

export default function CvPage() {
  return <CvView highlights={aboutData.cvHighlights} />;
}
