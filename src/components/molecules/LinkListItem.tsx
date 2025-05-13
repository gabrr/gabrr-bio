'use client';

import { ILinkCard } from '@/app/models/linksModel';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { Card, Flex, IconButton, Text } from '@radix-ui/themes';
import Link from 'next/link';

export function LinkListItem({ linkCard }: { linkCard: ILinkCard }) {
  return (
    <Card>
      <Flex direction={'column'} gap={'2'} justify={'between'} mb={'4'}>
        <Text size={'4'} weight={'bold'} className="line-clamp-1">
          {linkCard.title}
        </Text>

        <Text size={'2'} className="line-clamp-1">
          {linkCard.url}
        </Text>
      </Flex>

      <Flex justify={'end'} gap={'6'}>
        <Link
          href={`/admin/links/${linkCard.id}/edit`}
          tabIndex={-1}
          style={{ display: 'inline-block' }}
        >
          <IconButton asChild variant="ghost" color="gray">
            <span>
              <Pencil1Icon height={24} width={24} />
            </span>
          </IconButton>
        </Link>
        <IconButton variant="ghost" color="gray">
          <TrashIcon height={24} width={24} />
        </IconButton>
      </Flex>
    </Card>
  );
}
