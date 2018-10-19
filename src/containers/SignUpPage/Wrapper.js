import React from 'react';
import styled from 'styled-components';
import { CssBaseline } from '@material-ui/core';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-family: monospace;
  width: 85%;
  height: 100vh;
  margin: auto;
`;

export default ({ children }) => (
  <Wrapper>
    <CssBaseline />
    { children }
  </Wrapper>
)