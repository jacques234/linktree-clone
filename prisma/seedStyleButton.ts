import { ColorBg, StyleButton } from "@/interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedColors() {
  const ColorBg: StyleButton[] = [
    {
      id: 1,
      text: "Rounded",
      rounded: "rounded-full",
    },
    {
      id: 2,
      text: "Soft",
      rounded: "rounded-[10px]",
    },
    {
      id: 3,
      text: "Square",
      rounded: "rounded-[4px]",
    },
  ];

  for (const color of ColorBg) {
    await prisma.stylesButtons.create({
      data: color,
    });
  }

  console.log("✅ Colors seeded!");
}

seedColors()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
