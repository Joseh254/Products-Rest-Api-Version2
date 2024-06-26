import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export function getall(request, response) {
    response.send('getting all products');
  }

//   ***************************************
export function getoneproduct (request, response)  {
    response.send('getting one product');
  }
  
//   *****************************************

export async function createProduct (request, response) {
  // console.log(request.body);
    try {
      const {product_name,product_description,product_price,product_on_offer,product_image} = request.body;
      const newProduct = await prisma.products.create({
       data: {
        // product_id:product_id,
        product_name: product_name,
        product_description: product_description,
        product_price: product_price,
        product_on_offer: product_on_offer,
        product_image: product_image

        }
      })

      response.status(201).json(newProduct)
    } catch (error) {
      response.status(500).json({success:false, message:error.message})
    }
  }
//   *************************************

export function updateProduct  (request, response) {
    response.send('updating products');
  }

//   ************************************
export function deleteproduct (request, response) {
    response.send('deleting product');
  }
//   *****************************************
