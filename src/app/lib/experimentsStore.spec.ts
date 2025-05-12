import { experimentStore } from './experimentsStore';
import { ABExperiment } from '../models/experimentsModel';

describe('ExperimentStore', () => {
  const userId = 'user1';
  const experiment: ABExperiment = {
    id: 'exp1',
    userId,
    name: 'Test Experiment',
    createdAt: new Date().toISOString(),
    isActive: true,
    variants: {
      A: {
        id: 'A',
        link: {
          id: '1',
          title: 'A',
          subtitle: 'sub',
          buttonText: 'Go',
          url: 'https://a.com',
          backgroundColor: '#fff',
          buttonColor: 'blue',
        },
      },
      B: {
        id: 'B',
        link: {
          id: '2',
          title: 'B',
          subtitle: 'sub',
          buttonText: 'Go',
          url: 'https://b.com',
          backgroundColor: '#eee',
          buttonColor: 'red',
        },
      },
    },
    stats: {
      A: { views: 0, clicks: 0 },
      B: { views: 0, clicks: 0 },
    },
  };

  beforeEach(() => {
    // @ts-ignore: test isolation
    experimentStore['experiments'] = {};
  });

  it('should return empty array if no experiments for user', () => {
    expect(experimentStore.getAll(userId)).toEqual([]);
  });

  it('should add and get experiment for user', () => {
    experimentStore.add(userId, experiment);
    expect(experimentStore.getAll(userId)).toEqual([experiment]);
  });

  it('should get experiment by id', () => {
    experimentStore.add(userId, experiment);
    expect(experimentStore.getById(userId, experiment.id)).toEqual(experiment);
  });

  it('should record a view for a variant', () => {
    experimentStore.add(userId, experiment);
    expect(experimentStore.recordView(userId, experiment.id, 'A')).toBe(true);
    expect(experimentStore.getById(userId, experiment.id)?.stats.A.views).toBe(1);
  });

  it('should record a click for a variant', () => {
    experimentStore.add(userId, experiment);
    expect(experimentStore.recordClick(userId, experiment.id, 'B')).toBe(true);
    expect(experimentStore.getById(userId, experiment.id)?.stats.B.clicks).toBe(1);
  });

  it('should return false when recording view for non-existent experiment', () => {
    expect(experimentStore.recordView(userId, 'not-exist', 'A')).toBe(false);
  });

  it('should return false when recording click for non-existent experiment', () => {
    expect(experimentStore.recordClick(userId, 'not-exist', 'B')).toBe(false);
  });
});
