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
        where:{product_id: id},

        select:{
          product_id:false,
          product_name:true,
          product_description:true,
          product_price:true,
          product_on_offer:true
        }
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
//   ***********************************************************************************

export async function updateProduct  (request, response) {
    // response.send('updating products');
    const {product_name,product_description,product_price,product_on_offer,product_image}=request.body;
    const id = request.params.id;
    // console.log(request.body);
    try {
      let updateProducts;
      if (product_name){
        updateProducts= await prisma.products.update({
          where:{product_id:id},
          data: {product_name:product_name}
        })
        
      }

      if (product_description){
        updateProducts= await prisma.products.update({ 
          where:{product_id:id},
          data: {product_description:product_description}
        })
        
      }

      if (product_price){
        updateProducts= await prisma.products.update({
          where:{product_id:id},
          data: {product_price:product_price}
        })
        
      }

      if (product_on_offer){
        updateProducts= await prisma.products.update({
          where:{product_id:id},
          data: {product_on_offer:product_on_offer}
        })
        
      }

      if (product_image){
        updateProducts= await prisma.products.update({
          where:{product_id:id},
          data: {product_image:product_image}
        })
        
      }


      response.status(200).json({success:true, message:"product updated succesfuly"})

    } catch (error) {
      response.status(404).json({success:true, message:error.message})
    }
  }

//   *************************************************************************************
export async function deleteproduct (request, response) {
    // response.send('deleting product');
    const id = request.params.id;
    try {
      const delete_a_product =  await prisma.products.delete({
        where:{product_id: id}
      })
      // response.send(delete_a_product)
      response.status(200).json({success:true, message:"Product deleted succesfuly"})
    } catch (error) {
      response.status(404).json({success:false, message:"product not found"})
    }
  }
//   *****************************************
