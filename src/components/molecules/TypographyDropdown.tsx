import { Button, DropdownMenu, Text } from '@radix-ui/themes';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';

const typographyOptions = [
  { label: 'Poppins', value: 'Poppins' },
  { label: 'Roboto', value: 'Roboto' },
  { label: 'Geist', value: 'Geist' },
];

export interface TypographyDropdownProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function TypographyDropdown({ value, onValueChange }: TypographyDropdownProps) {
  const selected = typographyOptions.find((t) => t.value === value) || typographyOptions[0];
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" color="gray" size="3">
          <Text style={{ fontFamily: selected.value }}>{selected.label}</Text>
          <ChevronDownIcon width={16} height={16} style={{ marginLeft: 8 }} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="start">
        {typographyOptions.map((option) => (
          <DropdownMenu.Item key={option.value} onSelect={() => onValueChange(option.value)}>
            <Text style={{ fontFamily: option.value }}>{option.label}</Text>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
