'use client';

import { LinkCard } from '@/components/molecules/linkCard';
import { linkCards } from '@/mock/links';

export default function Page() {
  return (
    <div className="flex flex-col gap-4 pageIn">
      {linkCards.map((linkCard) => (
        <LinkCard key={linkCard.id} linkCard={linkCard} />
      ))}
    </div>
  );
}
