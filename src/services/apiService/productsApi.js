import { instance } from './axiosInstance';

export async function fetchProducts() {
  const response = await instance('/products');

  return response.data.payload.products;
}

export async function fetchProductId(productId) {
  const response = await instance(`/products/${productId}`);
  return response.data;
}
export async function addProduct(newProduct) {
  const response = await instance.post('/products', newProduct);

  return response.data;
}
