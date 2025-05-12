import { Menu } from '@/components/molecules/menu';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-7 pb-24">
      {children}
      <Menu />
    </div>
  );
}
