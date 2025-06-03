import { TopBar } from "@/components";
import { AuthOptions } from "@/components/ui/authOptions";
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
      <div className="w-full h-screen bg-[#f9fafb] flex flex-col">
        <TopBar />

        <div className="flex-1">{children}</div>

       <AuthOptions/>
      </div>
    </SessionProvider>
  );
}
