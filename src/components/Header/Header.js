import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { CustomLink } from 'components/CustomLink/CustomLink';

import { Wrapper, StyledNav, Logo } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <StyledContainer>
        <Wrapper>
          <Logo />
          <img src="../image/cropped-InJoy_vertical-2.png" alt="logo" />
          <StyledNav>
            <CustomLink header to="/">
              Головна
            </CustomLink>
            <CustomLink header to="/">
              Про нас
            </CustomLink>
          </StyledNav>
        </Wrapper>
      </StyledContainer>
    </header>
  );
};
