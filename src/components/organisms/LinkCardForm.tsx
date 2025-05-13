'use client';

import { createLinkServerAction } from '@/app/lib/link/linkActions';
import { ILinkCard } from '@/app/models/linksModel';
import { Button, Flex, Text, TextField } from '@radix-ui/themes';
import { useState } from 'react';
import { ColorDropdown } from '../molecules/ColorDropdown';
import { TypographyDropdown } from '../molecules/TypographyDropdown';

interface LinkCardFormProps {
  variant: ILinkCard;
}

export default function LinkCardForm({ variant }: LinkCardFormProps) {
  const [formData, setFormData] = useState<Partial<ILinkCard>>(variant);

  const handleChange = (field: keyof ILinkCard, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    console.log(formData);
  };

  const handleFormEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createLinkServerAction(formData as ILinkCard);
  };

  return (
    <form onSubmit={handleFormEvent}>
      <Text weight="medium" mb="1">
        Title
      </Text>
      <TextField.Root
        name="title"
        value={formData.title || ''}
        mb="4"
        required
        placeholder="Enter title"
        onChange={(e) => handleChange('title', e.target.value)}
      />

      <Text weight="medium" mb="1">
        Description
      </Text>
      <TextField.Root
        name="subtitle"
        value={formData.subtitle || ''}
        mb="4"
        required
        placeholder="Enter description"
        onChange={(e) => handleChange('subtitle', e.target.value)}
      />

      <Text weight="medium" mb="1">
        Button Text
      </Text>
      <TextField.Root
        name="buttonText"
        value={formData.buttonText || ''}
        mb="4"
        required
        placeholder="Enter button text"
        onChange={(e) => handleChange('buttonText', e.target.value)}
      />

      <Text weight="medium" mb="1">
        URL
      </Text>
      <TextField.Root
        name="url"
        value={formData.url || ''}
        mb="4"
        required
        placeholder="https://example.com"
        type="url"
        onChange={(e) => handleChange('url', e.target.value)}
      />

      <Text weight="medium" mb="1">
        Style
      </Text>
      <Flex gap="2" mb="4">
        <ColorDropdown
          value={formData.buttonColor || ''}
          onValueChange={(val) => handleChange('buttonColor', val)}
        />

        <ColorDropdown
          value={formData.backgroundColor || ''}
          onValueChange={(val) => handleChange('backgroundColor', val)}
        />
        <TypographyDropdown
          value={formData.typography || ''}
          onValueChange={(val) => handleChange('typography', val)}
        />
      </Flex>

      <Button type="submit">Save</Button>
    </form>
  );
}
