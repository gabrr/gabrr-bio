import { ActivityLogIcon, MagicWandIcon } from "@radix-ui/react-icons";
import { HomeIcon, Link2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Menu() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black border-t border-neutral-800 flex justify-evenly gap-8 py-3 z-50">
      <Link
        href="/admin"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors"
      >
        <HomeIcon width={24} height={24} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link
        href="/admin/links"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors"
      >
        <Link2Icon width={24} height={24} />
        <span className="text-xs mt-1">Links</span>
      </Link>
      <Link
        href="/admin/themes"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors"
      >
        <MagicWandIcon width={24} height={24} />
        <span className="text-xs mt-1">Theme</span>
      </Link>
      <Link
        href="/admin/experiments"
        className="flex flex-col items-center text-neutral-700 hover:text-black transition-colors"
      >
        <ActivityLogIcon width={24} height={24} />
        <span className="text-xs mt-1">Experiments</span>
      </Link>
    </footer>
  );
}
