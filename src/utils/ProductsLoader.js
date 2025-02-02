// utils/ProductsLoader.js

export const ProductsLoader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json(); // Ensure it returns valid product data
};

export const UsersLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json(); // Ensure it returns valid user data
};
