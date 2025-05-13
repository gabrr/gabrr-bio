import { Menu } from '@/components/organisms/menu';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-4 pb-24">
      {children}
      <Menu />
    </main>
  );
}
