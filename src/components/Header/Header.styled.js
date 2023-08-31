import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-bottom: 14px;
`;
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[3]}px;
  width: ${p => p.size}px;
  cursor: pointer;
  @media ${p => p.theme.media.tablet} {
    gap: ${p => p.theme.space[4]}px;
  }
`;
