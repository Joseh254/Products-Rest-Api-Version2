import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function getall(request, response) {
    // response.send('getting all products');
    try {
      const products = await prisma.products.findMany();
      response.status(200).json({success:true, data: products})
    } catch (error) {
      response.status(500).json({success:false,message:error.message})
    }
  }

//   ***************************************
export async function getoneproduct (request, response)  {
    // response.send('getting one product');
    const id = request.params.id;
    try {
      const product  = await prisma.products.findFirst({
        where:{product_id: id}
      })
  

      response.status(200).json({success:true,message:"Here is the product", data:product})
    } catch (error) {
      response.status(404).json({success:false, message:"product not found"})
    }
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

      response.status(201).json({success:true, message:"product created succesfuly"})
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
