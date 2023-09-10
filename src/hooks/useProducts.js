// import { useReducer } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { fetchProducts } from '../services/apiService/productsApi';
// import { useLimit } from './useLimit';
// import { useNavigate } from 'react-router-dom';

export const useProducts = () => {
  // const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAllProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchProducts();
      console.log(
        '🚀 ~ file: useProducts.js:23 ~ fetchAllProducts ~ data:',
        data
      );
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      setError({ error: e });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return { products, isLoading, error };
};
