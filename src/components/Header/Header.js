import { BiCart } from 'react-icons/bi';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { CustomLink } from 'components/CustomLink/CustomLink';
import logo from 'image/cropped-InJoy_vertical-2.png';

import { Wrapper, StyledNav } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <StyledContainer>
        <Wrapper>
          <img src={logo} alt="logo" width={100} />
          <StyledNav>
            <CustomLink header to="/">
              Головна
            </CustomLink>
            <CustomLink header to="/">
              Про нас
            </CustomLink>
            <CustomLink header to="/">
              Основні лінійки
            </CustomLink>
            <CustomLink header to="/">
              Магазин
            </CustomLink>
            <CustomLink header to="/">
              Наші контакти
            </CustomLink>
            <CustomLink header to="/" icon={BiCart} />
          </StyledNav>
        </Wrapper>
      </StyledContainer>
    </header>
  );
};
