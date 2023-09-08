import { instance } from './axiosInstance';

export async function fetchProducts() {
  const response = await instance('/');

  return response.data.payload.books;
}

export async function fetchProductId(bookId) {
  const response = await instance(`/books/${bookId}?_expand=author`);
  return response.data;
}
export async function addBook(newBook) {
  const response = await instance.post('/books', newBook);

  return response.data.payload.book;
}
export async function updateBook(feedback, id) {
  const response = await instance.patch(`/books/opinion/${id}`, feedback);
  return response.data.payload.updatedBook;
}
