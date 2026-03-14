import type { Metadata } from 'next';
import ProjectsView from '@/components/projects/ProjectsView';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projets — Emmanuel Attindogbe',
  description: 'Réalisations et projets techniques — applications web, mobile et systèmes.',
};

export default function ProjectsPage() {
  return <ProjectsView projects={projects} />;
}
