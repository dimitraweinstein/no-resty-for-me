import React, { Component } from 'react';
import Controls from '../components/Controls';


export default class RestyContainer extends Component {
  state = {
    loading: true,
    url: '',
    body: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = () => {
  
  }

  render() {
    const { loading, url, body } = this.state;
    
    return (
      <>
        <Controls
          url={url}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        { loading ? (<img
          // eslint-disable-next-line max-len
          src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
          alt="loading spinner" />) : (
          <>
            <Display />
          </>
        )
        }
      </>
    );
  }
}
