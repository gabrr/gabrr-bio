import { Menu } from "@/components/molecules/menu";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-7">
      {children}
      <Menu />
    </div>
  );
}
