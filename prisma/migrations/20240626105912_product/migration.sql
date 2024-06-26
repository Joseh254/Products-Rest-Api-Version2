/*
  Warnings:

  - A unique constraint covering the columns `[product_image,product_id]` on the table `products_table` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "products_table_product_image_key";

-- CreateIndex
CREATE UNIQUE INDEX "products_table_product_image_product_id_key" ON "products_table"("product_image", "product_id");
