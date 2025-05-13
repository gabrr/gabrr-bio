import { ILinkCard } from './linksModel';

export interface ABVariant {
  id: string;
  link: ILinkCard;
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

export interface ABStatsUI {
  winner: boolean;
  views: number;
  clickRate: number;
}

export interface ABExperimentUI {
  active: boolean;
  runningFor: string;
  versionA: ABStatsUI;
  versionB: ABStatsUI;
}
