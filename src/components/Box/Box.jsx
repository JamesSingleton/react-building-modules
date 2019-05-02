// import React from 'react';
import styled from 'styled-components';
import {
  space, color, fontSize, width,
} from 'styled-system';
// import theme from '../../theme';

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
};

export default Box;
