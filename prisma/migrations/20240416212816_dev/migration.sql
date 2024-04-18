-- CreateTable
CREATE TABLE "purchasedComics" (
    "id" TEXT NOT NULL,
    "purchasedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchasedComics_pkey" PRIMARY KEY ("id")
);
