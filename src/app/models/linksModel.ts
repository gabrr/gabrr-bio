import { accentColors } from '@radix-ui/themes/props';

export interface LinkCard {
  id: string; // Unique card ID
  title: string; // Main heading text
  subtitle: string; // Supporting description
  buttonText: string; // CTA button label
  url: string; // URL the button links to
  backgroundColor: string; // Hex or gradient string
  buttonColor: (typeof accentColors)[number];
}
