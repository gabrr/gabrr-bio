'use client';

import { useUser } from '@clerk/nextjs';
import { Link2Icon } from '@radix-ui/react-icons';
import { Box, Button, Callout, Flex, Separator, Switch, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SettingsPage() {
  const { user } = useUser();
  const [showFullName, setShowFullName] = useState(false);
  const [showProfilePicture, setShowProfilePicture] = useState(false);
  const [publicProfile, setPublicProfile] = useState(false);

  return (
    <Flex direction="column" gap={'8'}>
      <Flex direction="column" align="center">
        {user?.imageUrl && (
          <Image
            src={user.imageUrl}
            alt="Profile picture"
            width={80}
            height={80}
            className="rounded-full"
          />
        )}

        <Text size="4" weight="medium" mt="2">
          {user?.fullName || 'John Doe'}
        </Text>

        <Text color="gray" size="2">
          @{user?.username || user?.id?.slice(0, 8) || 'johndoe'}
        </Text>
      </Flex>

      <Link className="w-max self-center" href={`/${user?.username || user?.id}`}>
        <Button variant="soft" size="3">
          View Public Profile
          <Link2Icon />
        </Button>
      </Link>

      <Box>
        <Text weight="bold" size="4" mb="3" as="p">
          Profile Visibility
        </Text>

        <Flex align="center" justify="between" mb="2">
          <Box>
            <Text weight="medium">Show Full Name</Text>
            <Text color="gray" size="2" as="div">
              Allow others to see your full name
            </Text>
          </Box>
          <Switch checked={showFullName} onCheckedChange={setShowFullName} />
        </Flex>

        <Separator my="4" size={'4'} />

        <Flex align="center" justify="between" mb="2">
          <Box>
            <Text weight="medium">Show Profile Picture</Text>
            <Text color="gray" size="2" as="div">
              Make your profile picture visible
            </Text>
          </Box>
          <Switch checked={showProfilePicture} onCheckedChange={setShowProfilePicture} />
        </Flex>

        <Separator my="4" size={'4'} />

        <Flex align="center" justify="between">
          <Box>
            <Text weight="medium">Public Profile</Text>
            <Text color="gray" size="2" as="div">
              Make your profile discoverable
            </Text>
          </Box>
          <Switch checked={publicProfile} onCheckedChange={setPublicProfile} />
        </Flex>
      </Box>

      <Callout.Root color="blue">
        <Callout.Text>
          <Text weight="medium">Privacy Information</Text>
          <br />
          Changes to your privacy settings will take effect immediately. Only people who can view
          your profile will be able to see your information.
        </Callout.Text>
      </Callout.Root>
    </Flex>
  );
}
