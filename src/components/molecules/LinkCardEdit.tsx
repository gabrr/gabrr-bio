import type { LinkCard } from '@/mock/links';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { Card, Flex, IconButton, Text } from '@radix-ui/themes';

export function LinkCardEdit({ linkCard }: { linkCard: LinkCard }) {
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
        <IconButton variant="ghost" color="gray">
          <Pencil1Icon height={24} width={24} />
        </IconButton>

        <IconButton variant="ghost" color="gray">
          <TrashIcon height={24} width={24} />
        </IconButton>
      </Flex>
    </Card>
  );
}
