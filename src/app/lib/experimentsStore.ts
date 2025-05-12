import { set } from 'lodash';
import { ABExperiment } from '../models/experimentsModel';

class ExperimentStore {
  private experiments: Record<string, ABExperiment[]> = {};

  getAll(userId: string): ABExperiment[] {
    return this.experiments[userId] || [];
  }

  getById(userId: string, experimentId: string): ABExperiment | undefined {
    return this.getAll(userId).find((exp) => exp.id === experimentId);
  }

  add(userId: string, experiment: ABExperiment): void {
    const list = this.getAll(userId);
    set(this.experiments, userId, [...list, experiment]);
  }

  recordView(userId: string, experimentId: string, variantKey: 'A' | 'B'): boolean {
    const exp = this.getById(userId, experimentId);
    if (!exp) return false;
    exp.stats[variantKey].views++;
    return true;
  }

  recordClick(userId: string, experimentId: string, variantKey: 'A' | 'B'): boolean {
    const exp = this.getById(userId, experimentId);
    if (!exp) return false;
    exp.stats[variantKey].clicks++;
    return true;
  }
}

export const experimentStore = new ExperimentStore();
