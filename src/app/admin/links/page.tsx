'use client';

import { LinkListItem } from '@/components/molecules/LinkListItem';
import { linkCards } from '@/mock/links';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

export default function LinksPage() {
  return (
    <div className="flex flex-col gap-4 pageIn" data-index={linkCards.length}>
      {linkCards.map((linkCard) => (
        <LinkListItem key={linkCard.id} linkCard={linkCard} />
      ))}

      <Link href={'/admin/links/create'}>
        <Button size={'3'}>New Card Link</Button>
      </Link>
    </div>
  );
}
