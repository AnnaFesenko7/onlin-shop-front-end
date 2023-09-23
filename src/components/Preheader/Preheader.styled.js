import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: ${p => p.theme.colors.mainBgColor};
`;
export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[3]}px;

  cursor: pointer;
  @media ${p => p.theme.media.tablet} {
    gap: ${p => p.theme.space[4]}px;
  }
`;
export const StyledSpan = styled.span`
  text-transform: uppercase;
`;
