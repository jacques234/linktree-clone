"use server"
import { ColorBg, ColorOptions, StyleButton } from "@/interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getColorsLinks = async (): Promise<ColorOptions[]> => {
  return await prisma.color.findMany();
};

export const getColorsBackground = async() : Promise<ColorBg[]> => {
  return await prisma.colorBg.findMany();
}

export const getStylesButtons = async() : Promise<StyleButton[]> => {
  return await prisma.stylesButtons.findMany();
}