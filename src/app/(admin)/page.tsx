import { auth } from "@/auth";
import { Title } from "@/components";
import { CardLinks } from "@/components/home/CardLinks";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";


const prisma = new PrismaClient();

export default async function HomePage() {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  const pages = await prisma.page.findMany({
    where: {
      userId: session.user?.id,
    },
    include: {
      profileInformation: true,
    },
  });
  return (
    <div className="py-7 px-28">
      <Title
        title="Your Links Pages"
        description="Manage and edit your link pages"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-11">
        {pages.map((page) => (
          <CardLinks
            key={page.id}
            title={page.name}
            identificador={page.profileInformation?.userName!}
            descripcion={page.profileInformation?.bio!}
            fechaCreacion={page.createdAt}
            visitas={0}
            clicks={0}
          />
        ))}
      </div>
    </div>
  );
}
