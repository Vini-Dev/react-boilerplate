import React from 'react';
import PropTypes from 'prop-types';

import { Container, Slider, Field } from './styles';

const Switch = ({ checked, onChange }) => {
  return (
    <Container>
      <Field type="checkbox" checked={checked} onChange={onChange} />
      <Slider />
    </Container>
  );
};

Switch.defaultProps = {
  checked: false,
  onChange: () => {},
};

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Switch;
