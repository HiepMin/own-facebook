import React from 'react';
import styled from 'styled-components';
import { CssBaseline } from '@material-ui/core';
const Wrapper = styled.div`
  margin: 1rem auto;
  width: 50%;
`;

export default ({ children }) => (
  <Wrapper>
    <CssBaseline />
    { children }
  </Wrapper>
)