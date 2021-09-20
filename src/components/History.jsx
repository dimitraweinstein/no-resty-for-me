import React from 'react';
import PropTypes from 'prop-types';

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
  urlList: PropTypes.object(
    PropTypes.shape({
      method: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default History;
