import { Theme } from '../models/themeModel';

class ThemeStore {
  private themes: Theme[] = [
    {
      id: 'default',
      name: 'Default',
      borderRadius: '4px',
      backgroundGradient: 'linear-gradient(to right, #ffffff, #f0f0f0)',
      fontFamily: 'Arial, sans-serif',
    },
  ];

  private userThemes: Record<string, string> = {}; // Maps userId to themeId

  getAllThemes(): Theme[] {
    return this.themes;
  }

  getUserTheme(userId: string): Theme | undefined {
    const themeId = this.userThemes[userId];
    return this.themes.find((theme) => theme.id === themeId);
  }

  setUserTheme(userId: string, themeId: string): boolean {
    const themeExists = this.themes.some((theme) => theme.id === themeId);
    if (!themeExists) return false;
    this.userThemes[userId] = themeId;
    return true;
  }
}

export const themeStore = new ThemeStore();
