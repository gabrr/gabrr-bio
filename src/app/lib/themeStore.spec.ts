import { themeStore } from './themeStore';
import { Theme } from '../models/themeModel';

describe('ThemeStore', () => {
  const userId = 'user1';
  const defaultTheme: Theme = {
    id: 'default',
    name: 'Default',
    borderRadius: '4px',
    backgroundGradient: 'linear-gradient(to right, #ffffff, #f0f0f0)',
    fontFamily: 'Arial, sans-serif',
  };
  const customTheme: Theme = {
    id: 'custom',
    name: 'Custom',
    borderRadius: '8px',
    backgroundGradient: 'linear-gradient(to right, #000, #fff)',
    fontFamily: 'Roboto, sans-serif',
  };

  beforeEach(() => {
    // @ts-ignore: test isolation
    themeStore['userThemes'] = {};
    // @ts-ignore: test isolation
    themeStore['themes'] = [defaultTheme, customTheme];
  });

  it('should return all themes', () => {
    expect(themeStore.getAllThemes()).toEqual([defaultTheme, customTheme]);
  });

  it('should return undefined if user has no theme set', () => {
    expect(themeStore.getUserTheme(userId)).toBeUndefined();
  });

  it('should set and get user theme', () => {
    themeStore.setUserTheme(userId, customTheme.id);
    expect(themeStore.getUserTheme(userId)).toEqual(customTheme);
  });

  it('should not set user theme if theme does not exist', () => {
    expect(themeStore.setUserTheme(userId, 'not-exist')).toBe(false);
    expect(themeStore.getUserTheme(userId)).toBeUndefined();
  });
});
