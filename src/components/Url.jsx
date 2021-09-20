import React from 'react';
import PropTypes from 'prop-types';

const Url = ({ method, url }) => (
  <div>
    <h5>{method}</h5>
    <p>{url}</p>
  </div>
);

Url.propTypes = {
  method: PropTypes.string,
  url: PropTypes.string,
};

export default Url;
