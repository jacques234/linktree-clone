import { TopBar } from "@/components";
import { SessionProvider } from "next-auth/react";

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
    <SessionProvider>
      <div className="w-full h-screen bg-[#f9fafb] flex flex-col overflow-x-hidden">
        <TopBar />

        <div className="flex-1">{children}</div>
      </div>
    </SessionProvider>
  );
}
