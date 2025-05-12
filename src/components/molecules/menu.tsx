import { DashboardIcon, Link2Icon, RocketIcon, RulerSquareIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Text } from '@radix-ui/themes';

export function Menu() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black border-t border-neutral-800 flex justify-evenly gap-8 py-3 z-50">
      <Link
        href="/admin"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors"
      >
        <DashboardIcon width={24} height={24} />
        <Text as="span" size="1" mt="2" weight="bold">
          Dashboard
        </Text>
      </Link>
      <Link
        href="/admin/links"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors"
      >
        <Link2Icon width={24} height={24} />
        <Text as="span" size="1" mt="2" weight="bold">
          Links
        </Text>
      </Link>
      <Link
        href="/admin/themes"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors"
      >
        <RulerSquareIcon width={24} height={24} />
        <Text as="span" size="1" mt="2" weight="bold">
          Theme
        </Text>
      </Link>
      <Link
        href="/admin/experiments"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors"
      >
        <RocketIcon width={24} height={24} />
        <Text as="span" size="1" mt="2" weight="bold">
          Experiments
        </Text>
      </Link>
    </footer>
  );
}
