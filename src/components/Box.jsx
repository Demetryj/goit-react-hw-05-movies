import styled from 'styled-components';

import {
  position,
  color,
  space,
  layout,
  flexbox,
  border,
  shadow,
} from 'styled-system';

const Box = styled('div')(
  position,
  color,
  space,
  layout,
  flexbox,
  border,
  shadow
);

export default Box;
