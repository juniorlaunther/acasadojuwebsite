export interface SocialStat {
  platform: string;
  count: string;
  label: string;
  icon: any;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: string;
  comments: string;
  link: string;
}
