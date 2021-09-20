import React from 'react';
import PropTypes from 'prop-types';
import Url from './Url';

const History = ({ urlList }) => {
  return (
    <aside aria-label="history">
      <ul aria-label="urls">
        {urlList.map((url) => (
          <li key={url}>
            <Url
              method={urlList.method}
              url={urlList.url}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};

History.propTypes = {
  urlList: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired
};

export default History;
