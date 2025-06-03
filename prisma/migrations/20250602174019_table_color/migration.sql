-- CreateTable
CREATE TABLE "Color" (
    "id" SERIAL NOT NULL,
    "lable" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Color_lable_key" ON "Color"("lable");
