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
        <button type="radio">Get</button>
        <button type="radio">Put</button>
        <button type="radio">Post</button>
        <button type="radio">Patch</button>
        <button type="radio">Delete</button>
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
