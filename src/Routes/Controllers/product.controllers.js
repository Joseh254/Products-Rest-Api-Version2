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

export function createProduct (request, response) {
    try {
      
    } catch (error) {
      
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
