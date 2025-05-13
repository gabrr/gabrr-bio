'use client';

import { ILinkCard } from '@/app/models/linksModel';
import { Box, Flex, Text, TextField } from '@radix-ui/themes';
import { ColorDropdown } from './ColorDropdown';
import { TypographyDropdown } from './TypographyDropdown';

interface ABVariantCardProps {
  variant: ILinkCard;
}

export default function LinkCardForm({ variant }: ABVariantCardProps) {
  return (
    <Box>
      <Text weight="medium" mb="1">
        Title
      </Text>
      <TextField.Root value={variant.title} readOnly mb="4" />

      <Text weight="medium" mb="1">
        Description
      </Text>
      <TextField.Root value={variant.subtitle} readOnly mb="4" />

      <Text weight="medium" mb="1">
        Button Text
      </Text>
      <TextField.Root value={variant.buttonText} readOnly mb="4" />

      <Text weight="medium" mb="1">
        Style
      </Text>
      <Flex gap="2" mb="4">
        <ColorDropdown value={variant.backgroundColor} onValueChange={() => {}} />
        <TypographyDropdown value={variant.buttonText} onValueChange={() => {}} />
      </Flex>
    </Box>
  );
}
