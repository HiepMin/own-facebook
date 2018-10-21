import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 2rem 0;
    .btns--router {
        background: #fff;
        font-family: monospace;
        border-radius: 999px;
        margin: 0 10px;
        box-shadow: 0 0 6px 2px #0000001f;
    }
`;

export default ({ children }) => (
    <Wrapper>
      { children }
    </Wrapper>
  )

