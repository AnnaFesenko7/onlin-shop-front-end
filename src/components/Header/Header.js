import { FaAutoprefixer, FaHome } from 'react-icons/fa';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { CustomLink } from 'components/CustomLink/CustomLink';

import { FlexBox, StyledNav } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <StyledContainer header>
        <FlexBox>
          <StyledNav>
            <CustomLink to="/" icon={FaHome} />
            <CustomLink to="/admin" icon={FaAutoprefixer} />
          </StyledNav>
        </FlexBox>
      </StyledContainer>
    </header>
  );
};
