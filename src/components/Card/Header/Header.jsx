import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Divider from '../Divider';
import Heading from '../../Heading';
import Text from '../../Text';

const isString = a => typeof a === 'string';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 27px 30px 26px;
`;

const HeaderSuffix = styled.div`
  height: 0;
  display: flex;
  align-items: center;
`;

const Header = ({ title, subtitle, suffix }) => (
  <div>
    <HeaderWrapper>
      <div>
        {isString(title) ? (
          <Heading dataHook="title" appearance="H3">
            {title}
          </Heading>
        ) : (
          <span data-hook="title">{title}</span>
        )}
        {subtitle && isString(subtitle) ? (
          <Text dataHook="subtitle">{subtitle}</Text>
        ) : (
          <span data-hook="subtitle">{subtitle}</span>
        )}
      </div>
      {suffix && <HeaderSuffix>{suffix}</HeaderSuffix>}
    </HeaderWrapper>
    <Divider />
  </div>
);

Header.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  suffix: PropTypes.node
};

Header.defaultProps = {
  subtitle: '',
  suffix: ''
};

export default Header;
