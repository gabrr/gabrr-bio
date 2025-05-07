"use client";

import { LinkCardEdit } from "@/components/molecules/LinkCardEdit";
import { linkCards } from "@/mock/links";

export default function LinksPage() {
  return (
    <div className="flex flex-col gap-4">
      {linkCards.map((linkCard) => (
        <LinkCardEdit key={linkCard.id} linkCard={linkCard} />
      ))}
    </div>
  );
}
