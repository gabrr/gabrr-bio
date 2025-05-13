'use server';

import http from '@/core/httpClient';
import { LinkList } from './linkStore';

export async function getLinksServerAction(): Promise<LinkList | {}> {
  const data = await http('/api/links');

  if (!data) return {};

  return data;
}
