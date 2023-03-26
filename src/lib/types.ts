export interface Projects {
  name: string;
  description: string;
  image: string[];
  url: string;
  sources_code: string;
  tech: Array<{
    name: string;
    icon: any;
  }>;
  status: string;
}

export interface SkillSet {
  name: string;
  icon: any;
}
