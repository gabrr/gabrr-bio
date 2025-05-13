'use client';

import { ABExperiment, ABExperimentUI } from '@/app/models/experimentsModel';
import ABCard from '@/components/molecules/ABCard';
import LinkCardForm from '@/components/molecules/ABVariantCard';
import { LinkCard } from '@/components/molecules/LinkCard';
import * as Tabs from '@radix-ui/react-tabs';
import { Box, Button, Callout, Flex, Link, Switch, Text } from '@radix-ui/themes';
import { useState } from 'react';

// Demo data
const abTestData: ABExperiment = {
  id: 'exp-123',
  userId: 'user-456',
  name: 'Community CTA Test',
  createdAt: '2023-10-15T12:00:00Z',
  isActive: true,
  variants: {
    A: {
      id: 'var-a-789',
      link: {
        id: 'link-a-123',
        title: 'Join Our Community',
        subtitle: 'Connect with like-minded creators and grow together',
        url: 'https://example.com/community',
        buttonText: 'Get Started',
        buttonColor: 'blue',
        backgroundColor: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
        typography: 'Poppins',
      },
    },
    B: {
      id: 'var-b-101',
      link: {
        id: 'link-b-456',
        title: 'Become a Member',
        subtitle: 'Access exclusive resources and connect with creators',
        url: 'https://example.com/community',
        buttonText: 'Join Now',
        buttonColor: 'purple',
        backgroundColor: 'linear-gradient(135deg, #7C3AED, #EC4899)',
        typography: 'Poppins',
      },
    },
  },
  stats: {
    A: {
      views: 1245,
      clicks: 187,
    },
    B: {
      views: 1238,
      clicks: 223,
    },
  },
};

const UIData: ABExperimentUI = {
  active: true,
  runningFor: '7 days',
  versionA: {
    winner: false,
    views: 1245,
    clickRate: 15.0,
  },
  versionB: {
    winner: true,
    views: 1238,
    clickRate: 18.0,
  },
};

export default function ExperimentsPage() {
  const [tab, setTab] = useState<'A' | 'B'>('A');
  const [colorA, setColorA] = useState(abTestData.variants.A.link.backgroundColor);
  const [colorB, setColorB] = useState(abTestData.variants.B.link.backgroundColor);
  const [fontA, setFontA] = useState('Poppins');
  const [fontB, setFontB] = useState('Poppins');

  return (
    <Box mx="auto">
      <Text size="4" weight="medium" mb={'3'}>
        A/B Test
      </Text>

      <Flex align="center" gap="3" mb="6" mt={'2'}>
        <Switch defaultChecked={UIData.active} />
        <Text weight="medium">Active</Text>
        <Text color="gray" size="2">
          Running for {UIData.runningFor}
        </Text>
      </Flex>

      <Flex gap="3" mb="6">
        <ABCard experiment={UIData.versionA} variant="versionA" />
        <ABCard experiment={UIData.versionB} variant="versionB" />
      </Flex>

      <Flex gap="2" mb="6" direction={'column'}>
        <Text weight={'medium'} size={'4'}>
          Preview
        </Text>

        <Flex gap="2">
          <LinkCard linkCard={abTestData.variants.A.link} />
          <LinkCard linkCard={abTestData.variants.B.link} />
        </Flex>
      </Flex>

      <Tabs.Root
        value={tab}
        onValueChange={(value) => setTab(value as 'A' | 'B')}
        style={{ marginBottom: 24 }}
      >
        <Tabs.List aria-label="Edit Variant" className="w-full flex gap-2 mb-3">
          <Tabs.Trigger value="A" asChild>
            <Button
              variant={tab === 'A' ? 'solid' : 'soft'}
              color="gray"
              size="2"
              style={{ flex: 1 }}
            >
              Edit A
            </Button>
          </Tabs.Trigger>
          <Tabs.Trigger value="B" asChild>
            <Button
              variant={tab === 'B' ? 'solid' : 'soft'}
              color="gray"
              size="2"
              style={{ flex: 1 }}
            >
              Edit B
            </Button>
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="A">
          <LinkCardForm variant={abTestData.variants.A.link} />
        </Tabs.Content>

        <Tabs.Content value="B">
          <LinkCardForm variant={abTestData.variants.B.link} />
        </Tabs.Content>
      </Tabs.Root>

      <Callout.Root color="blue" mt="4">
        <Callout.Icon>
          <span role="img" aria-label="lightbulb">
            💡
          </span>
        </Callout.Icon>
        <Callout.Text>
          <Text weight="bold">Learn What Works</Text>
          <br />
          Try using action-oriented button text to increase clicks
          <br />
          <Link href="#" color="blue" size="2">
            Next Tip &rarr;
          </Link>
        </Callout.Text>
      </Callout.Root>
    </Box>
  );
}
