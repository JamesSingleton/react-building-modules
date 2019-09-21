import styled from 'styled-components';
import { space, color, layout } from 'styled-system';

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout
);

export default Box;
