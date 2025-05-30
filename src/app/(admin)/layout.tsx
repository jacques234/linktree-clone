import { TopBar } from "@/components";

export const metadata = {
  title: "Home",
  description: "Home",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen bg-[#f9fafb]">
      <TopBar />
      {children}
    </div>
  );
}
