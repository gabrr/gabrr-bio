import { settingsStore } from './settingsStore';
import { UserSettings } from '../models/settingsModel';

describe('SettingsStore', () => {
  const userId = 'user1';
  const defaultSettings: UserSettings = {
    userId,
    displayName: '',
    isPublicProfile: true,
  };
  const customSettings: UserSettings = {
    userId,
    displayName: 'Gabriel',
    isPublicProfile: false,
  };

  beforeEach(() => {
    // @ts-ignore: test isolation
    settingsStore['store'] = {};
  });

  it('should return default settings if none exist', () => {
    expect(settingsStore.get(userId)).toEqual(defaultSettings);
  });

  it('should update and return user settings', () => {
    settingsStore.update(userId, { displayName: 'Gabriel', isPublicProfile: false });
    expect(settingsStore.get(userId)).toEqual(customSettings);
  });

  it('should update only specified fields', () => {
    settingsStore.update(userId, { displayName: 'Gabriel' });
    expect(settingsStore.get(userId)).toEqual({ ...defaultSettings, displayName: 'Gabriel' });
  });
});
