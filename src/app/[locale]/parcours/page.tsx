import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ParcoursView from '@/components/parcours/ParcoursView';
import { experiences, education, skillCategories, softSkills } from '@/data/parcours';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return { title: t('parcours_title') };
}

export default function ParcoursPage() {
  return (
    <ParcoursView
      experiences={experiences}
      education={education}
      skillCategories={skillCategories}
      softSkills={softSkills}
    />
  );
}
