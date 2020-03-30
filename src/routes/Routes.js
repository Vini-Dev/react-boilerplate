import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import Default from '~/pages/_layouts/Default';

const RouteWrapper = ({ component: Component, history, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Default>
          <Component {...props} />
        </Default>
      )}
    />
  );
};

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withRouter(RouteWrapper);
