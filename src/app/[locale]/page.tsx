import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HeroView from '@/components/home/HeroView';
import { featuredProjects } from '@/data/projects';
import { experiences } from '@/data/parcours';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return { title: t('home_title'), description: t('home_description') };
}

export default function HomePage() {
  return (
    <HeroView
      featuredProjects={featuredProjects}
      experiences={experiences}
    />
  );
}
