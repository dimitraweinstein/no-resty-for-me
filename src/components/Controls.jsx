import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ url, body, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          id="input"
          placeholder="URL"
          type="text"
          name="url"
          value={url}
          onChange={onChange}
        />
        <label htmlFor="get">GET</label>
        <input
          id="get"
          type="radio"
          name="method"
          value="GET"
          onChange={onChange} />
        <label htmlFor="put">PUT</label>
        <input
          id="put"
          type="radio"
          name="method"
          value="PUT"
          onChange={onChange} />
        <label htmlFor="post">POST</label>
        <input
          id="post"
          type="radio"
          name="method"
          value="POST"
          onChange={onChange} />
        <label htmlFor="patch">PATCH</label>
        <input
          id="patch"
          type="radio"
          name="method"
          value="PATCH"
          onChange={onChange} />
        <label htmlFor="delete">DELETE</label>
        <input
          id="delete"
          type="radio"
          name="method"
          value="DELETE"
          onChange={onChange} />
        <button
          aria-label="request"
          type="submit">Go!</button>
        <textarea
          placeholder="Raw JSON Body"
          name="body"
          value={body}
          rows="10"
          cols="50"
          onChange={onChange}
        ></textarea>
      </form>
    </>
  );
};

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;
