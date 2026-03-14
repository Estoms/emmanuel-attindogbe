// ============================================================
// TYPES GLOBAUX — PORTFOLIO EMMANUEL ATTINDOGBE
// ============================================================

export type Locale = 'fr' | 'en';

export type NavItem = {
  label: string;
  href:  string;
};

// ------------------------------------------------------------
// EXPÉRIENCES
// ------------------------------------------------------------

export type ExperiencePoint = string;

export type Experience = {
  id:          string;
  role:        string;
  company:     string;
  location:    string;
  period:      string;       // ex: "Juil 2024 – Oct 2024"
  duration:    string;       // ex: "4 mois"
  type:        'stage' | 'cdi' | 'cdd' | 'freelance' | 'alternance';
  points:      ExperiencePoint[];
  tags:        string[];     // technologies utilisées
};

// ------------------------------------------------------------
// COMPÉTENCES
// ------------------------------------------------------------

export type Skill = {
  name:  string;
  level: 'débutant' | 'intermédiaire' | 'avancé' | 'expert';
};

export type SkillCategory = {
  id:     string;
  label:  string;
  icon:   string;            // nom de l'icône lucide-react
  skills: Skill[];
};

// ------------------------------------------------------------
// PROJETS
// ------------------------------------------------------------

export type Project = {
  id:          string;
  title:       string;
  shortDesc:   string;
  description: string;
  context:     string;
  period:      string;
  techStack:   string[];
  impact:      string[];      // métriques chiffrées, résultats concrets
  highlights:  string[];      // points techniques remarquables
  status:      'completed' | 'in-progress' | 'archived';
  links?: {
    github?: string;
    live?:   string;
  };
  featured:    boolean;
};

// ------------------------------------------------------------
// FORMATION
// ------------------------------------------------------------

export type Education = {
  id:          string;
  degree:      string;
  institution: string;
  location:    string;
  period:      string;
};
