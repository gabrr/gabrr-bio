import { ILinkCard } from '@/app/models/linksModel';
import LinkCardForm from '@/components/organisms/LinkCardForm';

export default function AddCardPage() {
  return (
    <main>
      <h1>Add Card</h1>
      <LinkCardForm variant={{} as ILinkCard} />
    </main>
  );
}
