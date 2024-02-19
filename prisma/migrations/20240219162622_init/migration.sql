-- CreateTable
CREATE TABLE "content_items" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "link" TEXT,
    "type" TEXT NOT NULL,
    "nativeId" TEXT,

    CONSTRAINT "content_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "content_items_createdAt_idx" ON "content_items"("createdAt");
