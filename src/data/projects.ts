import type { Project } from '@/types';

// ============================================================
// PROJETS — EMMANUEL ATTINDOGBE
// Données 100% issues du CV — zéro invention
// ============================================================

export const projects: Project[] = [
  {
    id:        'blood-management-web',
    title:     'Système de Gestion des Dons de Sang',
    shortDesc: "Application web intégrée pour le service de transfusion sanguine du département de l'Atlantique.",
    description:
      "Application web de gestion intégrée des dons de sang et des sorties terrain pour le service de Transfusion Sanguine de la DDS-ATL. Conçue de A à Z pendant 9 mois de stage, elle remplace un système entièrement manuel sur papier et couvre 100% des flux métiers du service.",
    context:   'Stage — Service de Transfusion Sanguine, DDS-ATL',
    period:    'Mars – Déc 2023',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    impact: [
      '−60% de temps de traitement des stocks',
      '100% des flux métiers couverts',
      '9 mois de développement solo',
      'Système papier entièrement remplacé',
    ],
    highlights: [
      'Cartographie complète des processus métier via interviews utilisateurs',
      'Modélisation des données et des flux avant toute ligne de code',
      'Interface opérationnelle dès la première utilisation par les équipes terrain',
      'Gestion des donateurs, sorties terrain et stocks médicaux en temps réel',
    ],
    status:   'completed',
    links:    {},
    featured: true,
  },
  {
    id:        'blood-management-android',
    title:     'Application Android — Dons de Sang & Stocks',
    shortDesc: 'Application mobile permettant la coordination en temps réel entre donneurs, soignants et centres de collecte.',
    description:
      "Application Android conçue pour digitaliser et optimiser la chaîne complète du don de sang : inscription des donneurs, suivi individuel des dons, rappels automatiques, et vérification en temps réel de la disponibilité des poches de sang pour les établissements médicaux.",
    context:   'Projet personnel — extension du stage DDS-ATL',
    period:    '2023 – 2024',
    techStack: ['Android', 'Java', 'Kotlin', 'SQLite', 'REST API'],
    impact: [
      'Vérification des stocks en temps réel',
      'Rappels automatiques aux donneurs',
      '3 profils utilisateurs distincts',
      'Coordination multiplateforme',
    ],
    highlights: [
      'Architecture multicouche : donneurs, professionnels de santé, centres de collecte',
      'Système de rappels intelligents pour les dons futurs',
      'Consultation instantanée de la disponibilité des poches par les établissements',
      'Interface mobile pensée pour une utilisation terrain rapide',
    ],
    status:   'completed',
    links:    {},
    featured: true,
  },
  {
    id:        'sport-platform',
    title:     "Plateforme Web — Groupe Sportif & Inscription Événement",
    shortDesc: "Site communautaire et plateforme d'inscription en ligne pour un événement de marche avec dashboard stats.",
    description:
      "Développement d'un site web pour un groupe de sport et d'une plateforme d'inscription en ligne pour leur événement de marche. Le site permet aux membres de se connecter, suivre les activités et partager leurs réalisations. La plateforme fournit aux organisateurs un dashboard statistique des participants.",
    context:   'Projet client',
    period:    '2023',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    impact: [
      'Inscription en ligne 100% digitale',
      'Dashboard stats temps réel',
      'Double interface : membres + organisateurs',
      'Gestion communautaire centralisée',
    ],
    highlights: [
      "Espace membres avec authentification, suivi d'activités et partage",
      "Processus d'inscription à l'événement entièrement automatisé",
      'Tableau de bord statistiques des participants pour les responsables',
      'Architecture double : site communautaire + outil de gestion événementiel',
    ],
    status:   'completed',
    links:    {},
    featured: false,
  },
  {
    id:        'school-evaluation',
    title:     'Système de Gestion des Évaluations — Collège AGBIDI',
    shortDesc: "Application desktop automatisant la collecte, correction et enregistrement des notes d'un collège.",
    description:
      "Application de gestion des évaluations pour le collège AGBIDI annexe Le Paradis, visant à automatiser l'ensemble du flux scolaire : collecte des notes, correction et enregistrement. Réduit les erreurs humaines et améliore la qualité du système d'information éducatif.",
    context:   'Projet académique',
    period:    '2022 – 2023',
    techStack: ['Visual Basic .NET', 'SQL Server', 'WinForms', 'UML'],
    impact: [
      'Flux scolaire 100% automatisé',
      'Erreurs humaines quasi-éliminées',
      'Modélisation UML complète',
      'Base SQL structurée et maintenable',
    ],
    highlights: [
      'Modélisation complète des données et flux de processus avant développement',
      'Application desktop opérationnelle avec interface WinForms ergonomique',
      'Base de données SQL structurée pour la persistance des résultats',
      'Automatisation du circuit complet : collecte → correction → enregistrement',
    ],
    status:   'completed',
    links:    {},
    featured: false,
  },
];

// Projets mis en avant (Hero page)
export const featuredProjects = projects.filter((p) => p.featured);
