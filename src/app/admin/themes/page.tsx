'use client';

import { Icon, IconVariant } from '@/components/atoms/Icon';
import { CheckIcon } from '@radix-ui/react-icons';
import { Box, Button, Card, Flex, Text } from '@radix-ui/themes';
import { useState } from 'react';

const themes = [
  {
    name: 'Light Theme',
    cardBackgroundColor: '',
    textColor: '#444',
    background: 'linear-gradient(135deg, #fffbe7, #ffefd9)',
    font: 'Poppins',
    selected: true,
    iconVariant: 'black' as IconVariant,
  },
  {
    name: 'Dark Theme',
    cardBackgroundColor: '',
    textColor: '',
    background: 'linear-gradient(135deg, #18181b, #27272a)',
    font: 'Roboto',
    selected: false,
    iconVariant: 'chrome' as IconVariant,
  },
];

type ThemeCardProps = {
  name: string;
  background: string;
  textColor: string;
  cardBackgroundColor: string;
  font: string;
  selected: boolean;
  onApply: () => void;
  onFontChange: (font: string) => void;
  iconVariant: IconVariant;
};

function ThemeCard({
  name,
  textColor,
  background,
  font,
  selected,
  cardBackgroundColor,
  onApply,
  onFontChange,
  iconVariant,
}: ThemeCardProps) {
  return (
    <Card
      className="space-y-5 !p-10"
      style={{ backgroundColor: cardBackgroundColor, color: textColor }}
    >
      <Flex align="center" justify="between">
        <Text size="4" weight="bold">
          {name}
        </Text>

        {selected && (
          <Box
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckIcon color="white" width={18} height={18} />
          </Box>
        )}
      </Flex>

      <Flex direction={'column'} gap={'1'}>
        <Text as="p">Icon set</Text>

        <Flex gap="3">
          <Icon name="facebook" variant={iconVariant} />
          <Icon name="x" variant={iconVariant} />
          <Icon name="instagram" variant={iconVariant} />
          <Icon name="whats" variant={iconVariant} />
          <Icon name="youtube" variant={iconVariant} />
        </Flex>
      </Flex>

      <Flex direction={'column'} gap={'1'}>
        <Text as="p">Background Color</Text>
        <Box
          style={{
            width: '100%',
            height: 40,
            borderRadius: 10,
            backgroundImage: background,
          }}
        />
      </Flex>

      <Flex direction={'column'} gap={'1'}>
        <Text as="p">Font Style</Text>
        <Text size="5" style={{ fontFamily: font }}>
          <strong>{font}</strong>
        </Text>
      </Flex>

      <Button
        mt="4"
        size={'3'}
        style={{ width: '100%' }}
        color={'blue'}
        variant={'solid'}
        disabled={selected}
        onClick={onApply}
      >
        {selected ? 'Applied' : 'Apply Theme'}
      </Button>
    </Card>
  );
}

export default function ThemesPage() {
  const [selected, setSelected] = useState('Light Theme');
  const [fonts, setFonts] = useState<Record<string, string>>({
    'Light Theme': 'Poppins',
    'Dark Theme': 'Roboto',
  });
  return (
    <>
      <Text size={'7'} weight={'bold'}>
        Theme
      </Text>

      <Flex direction={'column'} gap={'4'} mt={'4'}>
        {themes.map((theme) => (
          <ThemeCard
            key={theme.name}
            name={theme.name}
            cardBackgroundColor={theme.cardBackgroundColor}
            textColor={theme.textColor}
            background={theme.background}
            font={fonts[theme.name]}
            selected={selected === theme.name}
            onApply={() => setSelected(theme.name)}
            onFontChange={(font: string) => setFonts((f) => ({ ...f, [theme.name]: font }))}
            iconVariant={theme.iconVariant}
          />
        ))}
      </Flex>
    </>
  );
}
