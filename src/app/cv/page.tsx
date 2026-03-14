import type { Metadata } from 'next';
import CvView from '@/components/cv/CvView';
import { aboutData } from '@/data/about';

export const metadata: Metadata = {
  title: 'CV — Emmanuel Attindogbe',
  description: "Télécharger le CV de Emmanuel Attindogbe — Développeur d'Applications & Systèmes.",
};

export default function CvPage() {
  return <CvView highlights={aboutData.cvHighlights} />;
}
