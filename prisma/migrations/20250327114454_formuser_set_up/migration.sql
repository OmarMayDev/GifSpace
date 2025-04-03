-- CreateTable
CREATE TABLE "formUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userName" TEXT,
    "password" TEXT,

    CONSTRAINT "formUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "formUser_userName_key" ON "formUser"("userName");
