import { ABExperimentUI, ABStatsUI } from '@/app/models/experimentsModel';
import { Card, Flex, Text, Badge } from '@radix-ui/themes';
import React from 'react';

type StatsCardProps = {
  variant: 'versionA' | 'versionB';
  experiment: ABStatsUI;
};

export function ABCard({ variant, experiment }: StatsCardProps) {
  return (
    <Card className="flex-1">
      <Flex direction={'column'}>
        <Flex align="center" gap="2" mb="2">
          <Text size="4" weight="medium">
            {variant === 'versionA' ? 'Version A' : 'Version B'}
          </Text>

          {experiment.winner && (
            <Badge color="green" radius="full" size="2" style={{ marginLeft: 8, fontWeight: 500 }}>
              Winner
            </Badge>
          )}
        </Flex>

        <Text size="7" weight="bold" mb="1">
          {experiment.views.toLocaleString()}
        </Text>

        <Text color="gray" size="3" mb="2">
          Total Views
        </Text>

        <Text size="5" weight="bold" mb="1">
          {experiment.clickRate}%
        </Text>

        <Text color="gray" size="3">
          Click Rate
        </Text>
      </Flex>
    </Card>
  );
}

export default ABCard;
