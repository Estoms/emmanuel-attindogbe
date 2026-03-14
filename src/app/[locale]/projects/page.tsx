import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ProjectsView from '@/components/projects/ProjectsView';
import { projects } from '@/data/projects';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return { title: t('projects_title') };
}

export default function ProjectsPage() {
  return <ProjectsView projects={projects} />;
}
