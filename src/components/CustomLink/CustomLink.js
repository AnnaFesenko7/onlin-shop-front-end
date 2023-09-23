import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = ({ children, icon: Icon, to, header, ...p }) => {
  const sizeIcon = () => {
    return header === true ? 50 : 20;
  };

  const match = useMatch(to);

  return (
    <StyledLink header={`${header}`} to={to} match={match}>
      {Icon && <Icon size={sizeIcon()} />}
      {children}
    </StyledLink>
  );
};
const StyledLink = styled(Link)`
  padding: 5px;
  line-height: ${p => (p.header === 'true' ? p.theme.lineHeights.body : 0)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};

  color: ${p =>
    p.match ? p.theme.colors.accentColor : p.theme.colors.iconColor};
  &:hover {
    background-color: ${p => p.theme.colors.bgColor};
    border-radius: ${p => p.theme.radii.round};
  }
`;
