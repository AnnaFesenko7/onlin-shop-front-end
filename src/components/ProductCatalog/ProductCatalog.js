// import { useNavigate, useSearchParams } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import {
  GalleryList,
  Card,
  Thumb,
  Brand,
  Product,
  Image,
} from './ProductCatalog.styled';
import { useProducts } from '../../hooks/useProducts';

export const ProductCatalog = () => {
  // const navigate = useNavigate();
  // const [params] = useSearchParams();
  // const activePage = Number(params.get('pageNumber')) || 1;
  // const searchQuery = params.get('searchQuery') || null;
  // console.log(searchQuery);
  const { products, isLoading, error } = useProducts();
  // activePage,
  // searchQuery

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {isLoading && <SpinnerCircular />}
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <span>Oop! Something went wrong!</span>
      </div>
    );
  }
  return (
    <>
      <GalleryList>
        {products.map(product => (
          <Card
            key={product._id}
            // onClick={() => {
            //   navigate(`/about/${product._id}`);
            // }}
          >
            <Image src={product.image?.url} height="200" />
            <Thumb>
              <Brand>{product.brand}</Brand>
              <Product>{product.productName}</Product>
            </Thumb>
          </Card>
        ))}
      </GalleryList>
      {/* <AppPagination
        pageCount={pageCount}
        activePage={activePage}
      
      /> */}
    </>
  );
};
