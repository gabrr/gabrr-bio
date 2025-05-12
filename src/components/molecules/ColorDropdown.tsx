import { DropdownMenu, Button, Flex } from '@radix-ui/themes';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react';

const colorOptions = [
  {
    label: 'Indigo to Purple',
    value: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
  },
  {
    label: 'Purple to Pink',
    value: 'linear-gradient(135deg, #7C3AED, #EC4899)',
  },
  {
    label: 'Blue to Cyan',
    value: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  },
  {
    label: 'Orange to Red',
    value: 'linear-gradient(135deg, #f59e42, #ef4444)',
  },
];

export interface ColorDropdownProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function ColorDropdown({ value, onValueChange }: ColorDropdownProps) {
  const selected = colorOptions.find((c) => c.value === value) || colorOptions[0];
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" color="gray" size="3">
          <Flex align="center" gap="2">
            <span
              style={{
                display: 'inline-block',
                width: 20,
                height: 20,
                borderRadius: 4,
                backgroundImage: selected.value,
                marginRight: 8,
              }}
            />
            {selected.label}
          </Flex>
          <ChevronDownIcon width={16} height={16} style={{ marginLeft: 8 }} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="start">
        {colorOptions.map((option) => (
          <DropdownMenu.Item key={option.value} onSelect={() => onValueChange(option.value)}>
            <Flex align="center" gap="2">
              <span
                style={{
                  display: 'inline-block',
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  backgroundImage: option.value,
                  marginRight: 8,
                }}
              />
              {option.label}
            </Flex>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
