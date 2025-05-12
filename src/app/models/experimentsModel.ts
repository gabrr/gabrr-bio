import { LinkCard } from './linksModel';

export interface ABVariant {
  id: string;
  link: LinkCard;
}

export interface ABStats {
  views: number;
  clicks: number;
}

export interface ABExperiment {
  id: string;
  userId: string;
  name: string;
  createdAt: string;
  isActive: boolean;
  variants: {
    A: ABVariant;
    B: ABVariant;
  };
  stats: {
    A: ABStats;
    B: ABStats;
  };
}
