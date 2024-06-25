-- CreateTable
CREATE TABLE "products_table" (
    "product_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "product_on_offer" BOOLEAN NOT NULL,
    "product_image" TEXT NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("product_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_table_product_image_key" ON "products_table"("product_image");
