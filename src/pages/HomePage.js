import { AdminModal } from 'components/AdminModal/AdminModal';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { ProductCatalog } from 'components/ProductCatalog/ProductCatalog';
const HomePage = () => {
  return (
    <StyledContainer>
      <h1>HomePage</h1>
      <AdminModal></AdminModal>
      <ProductCatalog />
    </StyledContainer>
  );
};

export default HomePage;
