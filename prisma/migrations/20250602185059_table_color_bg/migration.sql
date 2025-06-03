-- CreateTable
CREATE TABLE "ColorBg" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "ColorBg_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ColorBg_color_key" ON "ColorBg"("color");
