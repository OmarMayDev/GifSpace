/*
  Warnings:

  - Changed the type of `gif` on the `Gifs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Gifs" DROP COLUMN "gif",
ADD COLUMN     "gif" BYTEA NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Gifs_gif_key" ON "Gifs"("gif");
