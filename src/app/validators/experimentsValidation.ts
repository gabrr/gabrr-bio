import { z } from 'zod';
import LinkCardSchema from './linkValidation';

const ABStatsSchema = z.object({
  views: z.number().int().nonnegative(),
  clicks: z.number().int().nonnegative(),
});

const ABVariantSchema = z.object({
  id: z.string().nonempty(),
  link: LinkCardSchema,
});

export const ABExperimentSchema = z.object({
  id: z.string().nonempty(),
  userId: z.string().nonempty(),
  name: z.string().nonempty(),
  createdAt: z.string().nonempty(),
  isActive: z.boolean(),
  variants: z.object({
    A: ABVariantSchema,
    B: ABVariantSchema,
  }),
  stats: z.object({
    A: ABStatsSchema,
    B: ABStatsSchema,
  }),
});

export type ABExperimentInput = z.infer<typeof ABExperimentSchema>;
