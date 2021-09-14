import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ url, onChange }) => (
  <>
    <input
      id="input"
      type="text"
      name="url"
      value={url}
      onChange={onChange}
    />
  </>
);

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;
