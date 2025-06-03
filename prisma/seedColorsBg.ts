import { ColorBg } from "@/interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedColors() {
  const ColorBg: ColorBg[] = [
    {
      id: 1,
      color: "bg-gradient-to-r from-purple-400 via-pink-400 to-pink-300",
    },
    {
      id: 2,
      color: "bg-gradient-to-r from-cyan-400 to-cyan-300",
    },
    {
      id: 3,
      color: "bg-gradient-to-r from-orange-400 to-yellow-400",
    },
    {
      id: 4,
      color: "bg-gradient-to-r from-green-400 to-green-300",
    },
    {
      id: 5,
      color: "bg-black",
    },
  ];

  for (const color of ColorBg) {
    await prisma.colorBg.create({
      data: color,
    });
  }

  console.log("✅ Colors seeded!");
}

seedColors()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
