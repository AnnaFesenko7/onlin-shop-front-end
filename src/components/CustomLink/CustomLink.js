import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = ({ children, icon: Icon, to, header, ...p }) => {
  console.log('🚀 ~ file: CustomLink.js:5 ~ CustomLink ~ header:', header);
  const match = useMatch(to);

  return (
    <StyledLink header={`${header}`} to={to} match={match}>
      {Icon && <Icon size="20" lineheight="0" />}
      {children}
    </StyledLink>
  );
};
const StyledLink = styled(Link)`
  /* width: ${p => (p.icon ? p.theme.space[6] : p.theme.space[4])} px; */
  /* height: ${p => (p.header ? p.theme.space[4] : p.theme.space[6])} px;
  width: ${p => (p.header ? p.theme.space[4] : p.theme.space[6])} px; */
  /* height: ${p => console.log(p)}; */
  /* box-shadow: ${p => p.theme.boxShadow.main};  */
  padding: 5px;
  line-height: ${p => (p.header === 'true' ? p.theme.lineHeights.body : 0)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};

  color: ${p =>
    p.match ? p.theme.colors.accentColor : p.theme.colors.iconColor};
  &:hover {
    background-color: ${p => p.theme.colors.bgColor};
    border-radius: ${p => p.theme.radii.round};
  }
`;
