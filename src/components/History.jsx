import React from 'react';
import PropTypes from 'prop-types';

const History = ({ url }) => {
  return (
    <aside aria-label="history">
      <ul aria-label="urls">
        <li key={url}>
          {url}
        </li>
      </ul>
    </aside>
  );
};

History.propTypes = {
  url: PropTypes.string.isRequired,
};

export default History;
