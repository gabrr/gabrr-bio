import { z } from 'zod';

const LinkCardSchema = z.object({
  id: z.string().nonempty(),
  title: z.string().nonempty(),
  subtitle: z.string().nonempty(),
  buttonText: z.string().nonempty(),
  url: z.string().url().nonempty(),
  backgroundColor: z.string().nonempty(),
  buttonColor: z.string().nonempty(),
  typography: z.string().nonempty(),
});

export type LinkCard = z.infer<typeof LinkCardSchema>;

export default LinkCardSchema;
