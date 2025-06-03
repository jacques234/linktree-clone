import { auth } from "@/auth";
import { Title } from "@/components";
import { CardLinks } from "@/components/home/CardLinks";
import { CardLink } from "@/interfaces";
import { redirect } from "next/navigation";

const cards: CardLink[] = [
  {
    title: "Mi Pagina Personal",
    identificador: "@juandesigner",
    descripcion: "Diseñador UI/UX • Creador de contenido",
    fechaCreacion: new Date(),
    visitas: 1250,
    clicks: 340,
  },
  {
    title: "Pagina de Negocios",
    identificador: "@mybusiness",
    descripcion: "Consultoría digital y marketing",
    fechaCreacion: new Date(),
    visitas: 890,
    clicks: 210,
  },
];

export default async function HomePage() {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="py-7 px-28">
      <Title
        title="Your Links Pages"
        description="Manage and edit your link pages"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-11">
        {cards.map((card) => (
          <CardLinks key={card.identificador} {...card} />
        ))}
      </div>
    </div>
  );
}
