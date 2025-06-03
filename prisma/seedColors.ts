import { PrismaClient } from "@prisma/client";





const prisma = new PrismaClient();

async function seedColors() {
    const colorOptions = [
        { label: "Blue", value: "blue", color: "bg-blue-500" },
        { label: "Red", value: "red", color: "bg-red-500" },
        { label: "Green", value: "green", color: "bg-green-500" },
        { label: "Purple", value: "purple", color: "bg-purple-500" },
        { label: "Pink", value: "pink", color: "bg-pink-500" },
        { label: "Yellow", value: "yellow", color: "bg-yellow-400" },
        { label: "Black", value: "black", color: "bg-black" },
        { label: "White", value: "white", color: "bg-white border" },
        { label: "Instagram Gradient", value: "instagram", color: "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500" },
        { label: "Blue Gradient", value: "blueGradient", color: "bg-gradient-to-r from-blue-400 to-blue-700" },
    ];

    for (const color of colorOptions) {
        await prisma.color.create({
            data: color
        });
    }

    console.log('✅ Colors seeded!');
}

seedColors()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
