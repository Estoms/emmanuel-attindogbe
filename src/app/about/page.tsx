import type { Metadata } from 'next';
import AboutView from '@/components/about/AboutView';
import { aboutData } from '@/data/about';

export const metadata: Metadata = {
  title: 'À propos — Emmanuel Attindogbe',
  description:
    "Développeur d'applications et systèmes — parcours, engagements et vision du numérique responsable.",
};

export default function AboutPage() {
  return <AboutView data={aboutData} />;
}
