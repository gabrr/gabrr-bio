import {
  DashboardIcon,
  Link2Icon,
  RocketIcon,
  RulerSquareIcon,
  GearIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { Text } from '@radix-ui/themes';

export function Menu() {
  return (
    <footer
      className="max-w-2xl fixed bottom-2 bg-white/50 backdrop-blur-md rounded-2xl border border-gray-200 w-[95%] left-1/2 -translate-x-1/2 flex overflow-x-auto gap-3 justify-between py-3 px-3 z-50"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <Link
        href="/admin"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors min-w-[64px]"
      >
        <DashboardIcon width={24} height={24} />
        <Text as="span" size="2" mt="2" weight="bold">
          Home
        </Text>
      </Link>
      <Link
        href="/admin/links"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors min-w-[64px]"
      >
        <Link2Icon width={24} height={24} />
        <Text as="span" size="2" mt="2" weight="bold">
          Links
        </Text>
      </Link>
      <Link
        href="/admin/themes"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors min-w-[64px]"
      >
        <RulerSquareIcon width={24} height={24} />
        <Text as="span" size="2" mt="2" weight="bold">
          Theme
        </Text>
      </Link>
      <Link
        href="/admin/experiments"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors min-w-[64px]"
      >
        <RocketIcon width={24} height={24} />
        <Text as="span" size="2" mt="2" weight="bold">
          A/B Test
        </Text>
      </Link>
      <Link
        href="/admin/settings"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors min-w-[64px]"
      >
        <GearIcon width={24} height={24} />
        <Text as="span" size="2" mt="2" weight="bold">
          Settings
        </Text>
      </Link>
    </footer>
  );
}
