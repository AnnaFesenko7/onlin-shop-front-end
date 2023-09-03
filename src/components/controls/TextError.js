import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: red;
`;

export const TextError = props => {
  return <StyledDiv>{props.children}</StyledDiv>;
};
