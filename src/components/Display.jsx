import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Display = ({ jsonResponse }) => {
  return (
    <div>
      <ReactJson src={jsonResponse} />
    </div>
  );
};

Display.propTypes = {
  jsonResponse: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

export default Display;