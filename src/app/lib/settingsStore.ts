import { set } from 'lodash';
import { UserSettings } from '../models/settingsModel';

class SettingsStore {
  private store: Record<string, UserSettings> = {};

  get(userId: string): UserSettings {
    return (
      this.store[userId] || {
        userId,
        displayName: '',
        isPublicProfile: true,
      }
    );
  }

  update(userId: string, changes: Partial<UserSettings>): UserSettings {
    const current = this.get(userId);
    const updated = { ...current, ...changes };
    set(this.store, userId, updated);
    return updated;
  }
}

export const settingsStore = new SettingsStore();
