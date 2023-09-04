import { AdminForm } from 'components/AdminForm/AdminForm';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';

const AdminPage = () => {
  return (
    <>
      <StyledContainer>
        <h1>AdminPage</h1>
        <AdminForm isEditing={false} />
      </StyledContainer>
    </>
  );
};
export default AdminPage;
