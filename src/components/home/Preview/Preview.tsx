import { PrismaClient } from "@prisma/client";
import { ContentPreview } from "./ContentPreview";
import { ColorOptions } from "@/interfaces";

const prisma = new PrismaClient();
export const Preview = async () => {
  const colorsFromDb = await prisma.color.findMany({
    select: {
      label: true,
      value: true,
      color: true,
    },
  });
  const colorsBg = await prisma.colorBg.findMany();
  const stylesButons = await prisma.stylesButtons.findMany();

  return (
    <div className="p-7 sticky top-0">
      <h1 className="font-bold text-2xl">Preview</h1>
      <ContentPreview colorsProp={colorsFromDb} colorsBg={colorsBg} stylesButtons={stylesButons}/>
    </div>
  );
};
