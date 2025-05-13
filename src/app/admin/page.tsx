'use client';

import { Icon } from '@/components/atoms/Icon';
import { LinkCard } from '@/components/molecules/LinkCard';
import { linkCards } from '@/mock/links';
import { useUser } from '@clerk/nextjs';
import { Flex, Text } from '@radix-ui/themes';
import Image from 'next/image';

export default function Page() {
  const { user } = useUser();

  return (
    <>
      {user?.imageUrl && (
        <Flex direction={'column'} gap={'2'} align={'center'} mb={'4'}>
          <Image
            src={user.imageUrl}
            alt="User avatar"
            width={64}
            height={64}
            className="rounded-full"
          />

          <Text>
            {user.firstName} {user.lastName}
          </Text>
        </Flex>
      )}

      <Flex gap={'6'} justify={'center'} my={'8'}>
        <Icon name="whats" variant="chrome" />
        <Icon name="x" variant="chrome" />
        <Icon name="instagram" variant="chrome" />
      </Flex>

      <Flex gap={'2'} direction={'column'}>
        {linkCards.map((linkCard) => (
          <LinkCard key={linkCard.id} linkCard={linkCard} />
        ))}
      </Flex>
    </>
  );
}
