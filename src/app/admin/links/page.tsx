import { getLinksServerAction } from '@/app/lib/link/linkActions';
import { ILinkCard } from '@/app/models/linksModel';
import { ClientButton } from '@/components/atoms/ClientButton';
import { LinkListItem } from '@/components/molecules/LinkListItem';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import EmptyLinks from './empty';
import { PlusCircledIcon } from '@radix-ui/react-icons';

export default async function LinksPage() {
  const links = await getLinksServerAction();

  return (
    <div className="flex flex-col gap-4 pageIn" data-index={links}>
      {isEmpty(links) ? (
        <EmptyLinks />
      ) : (
        Object.values(links).map((link) => (
          <LinkListItem key={link.id} linkCard={link as ILinkCard} />
        ))
      )}

      <Link href={'/admin/links/create'} className="w-max mx-auto">
        <ClientButton size={'3'}>
          Add Link <PlusCircledIcon />{' '}
        </ClientButton>
      </Link>
    </div>
  );
}
