import type { Metadata } from 'next';
import ParcoursView from '@/components/parcours/ParcoursView';
import { experiences, education, skillCategories, softSkills } from '@/data/parcours';

export const metadata: Metadata = {
  title: 'Parcours — Emmanuel Attindogbe',
  description: 'Expériences professionnelles, compétences techniques et formation.',
};

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
