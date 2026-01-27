export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  url: string;
  launchDate: string;
  tags: string[];
  twitter?: string;
  github?: string;
  discord?: string;
}

export interface Punk {
  id: number;
  name?: string;
  twitter?: string;
  website?: string;
  projects: Project[];
}

export type PunksData = Record<number, Punk>;
