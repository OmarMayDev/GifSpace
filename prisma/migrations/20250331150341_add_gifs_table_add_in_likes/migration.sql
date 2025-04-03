-- AlterTable
ALTER TABLE "formUser" ADD COLUMN     "likedGifs" TEXT[];

-- CreateTable
CREATE TABLE "Gifs" (
    "id" TEXT NOT NULL,
    "gif" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "Gifs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gifs_gif_key" ON "Gifs"("gif");
