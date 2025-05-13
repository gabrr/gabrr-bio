'use server';

import http from '@/core/httpClient';
import { v4 as uuidv4 } from 'uuid';
import { LinkList } from './linkStore';
import LinkCardSchema from '@/app/validators/linkValidation';
import { ILinkCard } from '@/app/models/linksModel';

export async function getLinksServerAction(): Promise<LinkList | {}> {
  const data = await http('/api/links');

  if (!data) return {};

  return data;
}

export async function createLinkServerAction(link: Omit<ILinkCard, 'id'>) {
  // Generate UUID for the new link

  const newLink = { ...link, id: uuidv4() };
  const parseResult = LinkCardSchema.safeParse(newLink);

  if (!parseResult.success) {
    return { error: parseResult.error };
  }

  const res = await http('/api/links', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newLink),
  });

  if (res?.error) {
    return { error: { api: res.error } };
  }

  return { data: res };
}
