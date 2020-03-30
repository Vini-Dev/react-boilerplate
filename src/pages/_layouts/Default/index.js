import React from 'react';
import PropTypes from 'prop-types';
import Menu from '~/components/Menu';

import { Container, Content } from './styles';

const Default = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content>{children}</Content>
    </Container>
  );
};

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
