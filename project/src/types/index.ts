export interface Skill {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl?: string;
}