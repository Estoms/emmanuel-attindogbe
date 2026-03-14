import type { Experience, SkillCategory, Education } from '@/types';

// ============================================================
// EXPÉRIENCES PROFESSIONNELLES
// ============================================================

export const experiences: Experience[] = [
  {
    id:       'benin-digital',
    role:     'Développeur Web',
    company:  'Bénin Digital',
    location: 'Bénin',
    period:   'Juil 2024 – Oct 2024',
    duration: '4 mois',
    type:     'stage',
    points: [
      'Développement, maintenance et optimisation de sites web internes avec prise en compte des enjeux de sécurité et de fiabilité.',
      'Réduction du temps de chargement des pages de 40% grâce à l\u2019optimisation des assets, la mise en cache et la refonte des requêtes SQL.',
      'Élimination des bugs critiques impactant l\u2019expérience des utilisateurs quotidiens sur 3 plateformes web.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'SQL', 'Optimisation'],
  },
  {
    id:       'synergie-digital',
    role:     'Développeur d\u2019Applications',
    company:  'Synergie Digital',
    location: 'Bénin',
    period:   'Janv 2024 – Juin 2024',
    duration: '6 mois',
    type:     'stage',
    points: [
      'Architecture et déploiement complet d\u2019un site web : de la conception UX au développement back-end jusqu\u2019à la mise en production.',
      'Collaboration au sein d\u2019une équipe pluridisciplinaire de 4 personnes avec méthodologie agile, sprints hebdomadaires et revues de code.',
      'Amélioration des scores de performance de 35% par des optimisations ciblées du rendu côté client, avec compatibilité 100% multiplateforme.',
    ],
    tags: ['UX/UI', 'Figma', 'Back-end', 'Déploiement', 'Agile', 'Performance'],
  },
  {
    id:       'dds-atl',
    role:     'Développeur d\u2019Applications',
    company:  'Service de Transfusion Sanguine – DDS-ATL',
    location: 'Atlantique, Bénin',
    period:   'Mars 2023 – Déc 2023',
    duration: '9 mois',
    type:     'stage',
    points: [
      'Livraison d\u2019une application Android complète en 9 mois, couvrant 100% des flux métiers : gestion des donateurs, sorties terrain et stocks médicaux.',
      'Réduction de 60% du temps de traitement des stocks grâce au suivi en temps réel, remplaçant un système manuel sur papier.',
      'Cartographie et modélisation des processus métier via interviews utilisateurs et analyse fonctionnelle approfondie.',
      'Conception d\u2019une interface mobile intuitive, opérationnelle pour les équipes terrain dès la première utilisation.',
    ],
    tags: ['Android', 'Java', 'Kotlin', 'UX/UI', 'SQL', 'Analyse fonctionnelle'],
  },
  {
    id:       'asecna',
    role:     'Technicien Systèmes & Réseaux',
    company:  'ASECNA – Unité RSI Météo',
    location: 'Bénin',
    period:   '2022',
    duration: 'Stage',
    type:     'stage',
    points: [
      'Collecte de données météorologiques à partir des équipements en bordure de piste (transmissiomètres, parc d\u2019observation).',
      'Maintenance des équipements météorologiques, des serveurs en salle VHF et configuration de logiciels opérationnels.',
      'Configuration de dossiers partagés, points d\u2019accès réseau, création d\u2019images disque et suivi des communications pilotes/tours de contrôle.',
    ],
    tags: ['Réseaux', 'Maintenance', 'Linux', 'Serveurs', 'Systèmes'],
  },
];

// ============================================================
// FORMATION
// ============================================================

export const education: Education[] = [
  {
    id:          'la-rochelle',
    degree:      'Licence 3 Informatique',
    institution: 'Université de La Rochelle',
    location:    'La Rochelle, France',
    period:      '2025 – 2026',
  },
  {
    id:          'ifri-master',
    degree:      'Master 1 – Systèmes d\u2019Information et Réseaux Informatiques',
    institution: 'IFRI-UAC',
    location:    'Bénin',
    period:      '2024 – 2025',
  },
  {
    id:          'gasa-licence',
    degree:      'Licence Professionnelle – Système Informatique et Logiciels',
    institution: 'GASA Formation',
    location:    'Bénin',
    period:      '2020 – 2023',
  },
  {
    id:          'bac',
    degree:      'Baccalauréat Série D',
    institution: 'Collège Abbé Florent NASCIMENTO',
    location:    'Bénin',
    period:      '2019 – 2020',
  },
];

// ============================================================
// COMPÉTENCES
// ============================================================

export const skillCategories: SkillCategory[] = [
  {
    id:    'dev',
    label: 'Développement',
    icon:  'Code2',
    skills: [
      { name: 'Python',      level: 'avancé' },
      { name: 'JavaScript',  level: 'avancé' },
      { name: 'TypeScript',  level: 'intermédiaire' },
      { name: 'Java',        level: 'avancé' },
      { name: 'Kotlin',      level: 'intermédiaire' },
      { name: 'PHP',         level: 'intermédiaire' },
      { name: 'C / C++',     level: 'intermédiaire' },
      { name: 'HTML / CSS',  level: 'expert' },
    ],
  },
  {
    id:    'frameworks',
    label: 'Web & Frameworks',
    icon:  'Globe',
    skills: [
      { name: 'Next.js',      level: 'intermédiaire' },
      { name: 'React',        level: 'intermédiaire' },
      { name: 'Node.js',      level: 'intermédiaire' },
      { name: 'Android SDK',  level: 'avancé' },
    ],
  },
  {
    id:    'systemes',
    label: 'Systèmes & Infrastructure',
    icon:  'Server',
    skills: [
      { name: 'Linux (Ubuntu/Debian)', level: 'avancé' },
      { name: 'Apache / Nginx',        level: 'intermédiaire' },
      { name: 'AWS',                   level: 'débutant' },
      { name: 'Sécurité applicative',  level: 'intermédiaire' },
      { name: 'Réseaux & monitoring',  level: 'intermédiaire' },
    ],
  },
  {
    id:    'bdd',
    label: 'Bases de Données',
    icon:  'Database',
    skills: [
      { name: 'MySQL',       level: 'avancé' },
      { name: 'PostgreSQL',  level: 'intermédiaire' },
      { name: 'MongoDB',     level: 'intermédiaire' },
      { name: 'SQL Server',  level: 'intermédiaire' },
    ],
  },
  {
    id:    'outils',
    label: 'Méthodes & Outils',
    icon:  'Wrench',
    skills: [
      { name: 'Git / GitHub',   level: 'avancé' },
      { name: 'Figma',          level: 'intermédiaire' },
      { name: 'Scrum / Agile',  level: 'intermédiaire' },
      { name: 'VS Code',        level: 'expert' },
      { name: 'Android Studio', level: 'avancé' },
    ],
  },
];

// ============================================================
// SOFT SKILLS / SAVOIR-ÊTRE
// ============================================================

export const softSkills: string[] = [
  "Rigueur & sens de l'organisation",
  "Autonomie & prise d'initiative",
  'Résilience',
  'Apprentissage rapide',
  'Communication en équipe',
  'Adaptabilité',
];
