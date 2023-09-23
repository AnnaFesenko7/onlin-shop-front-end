import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { FaAutoprefixer } from 'react-icons/fa';
import { ImYoutube } from 'react-icons/im';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { CustomLink } from 'components/CustomLink/CustomLink';
import {
  Wrapper,
  StyledNav,
  SocialLinks,
  StyledSpan,
} from './Preheader.styled';

export const PreHeader = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <StyledNav>
          <SocialLinks>
            <CustomLink
              to="https://www.facebook.com/InJoyCosmetics/"
              icon={FaFacebookF}
            />
            <CustomLink
              to="https://www.youtube.com/channel/UC56HkuUMGoGSkDcX1DlVpBQ"
              icon={ImYoutube}
            />
            <CustomLink
              to="https://www.instagram.com/injoy_cosmetics/"
              icon={FaInstagram}
            />
          </SocialLinks>
          <StyledSpan>
            Безкоштовна доставка на сумму замовлення від 600 UAN
          </StyledSpan>

          <CustomLink to="/admin" icon={FaAutoprefixer} />
        </StyledNav>
      </StyledContainer>
    </Wrapper>
  );
};
