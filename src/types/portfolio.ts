export type Experience = {
  title: string;
  company: string;
  period: string;
  location?: string;
  project?: {
    name: string;
    url?: string;
  };
  tech: string[];
  cicd?: string;
  responsibilities: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string;
};

export type Profile = {
  name: string;
  displayName: string;
  role: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  facebook: string;
  avatar: string;
  cvFile: string;
};
