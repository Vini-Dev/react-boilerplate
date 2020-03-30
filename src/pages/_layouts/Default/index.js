import React from 'react';
import PropTypes from 'prop-types';
import Menu from '~/components/Menu';
import background from '~/assets/undraw_react_y7wq.svg';

import { Container, Content } from './styles';

const Default = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content src={background}>{children}</Content>
    </Container>
  );
};

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
