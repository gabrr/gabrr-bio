export interface Theme {
  id: string; // Unique identifier for the theme
  name: string; // Display name of the theme
  borderRadius: string; // e.g., '4px', '8px'
  backgroundGradient: string; // CSS gradient string
  fontFamily: string; // e.g., 'Arial, sans-serif'
}

export interface UserTheme {
  userId: string; // Clerk user ID
  themeId: string; // ID of the selected theme
}
