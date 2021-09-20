import React, { Component } from 'react';
import Controls from '../components/Controls';
import History from '../components/History';
import Display from '../components/Display';
import { fetchApi } from '../services/restyFetchApi';


export default class RestyContainer extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    jsonResponse: {
      'Fetch Me!': 'Fetch Me Right Now!'
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { url, method, body } = this.state;
    const jsonResponse = await fetchApi(url, method, body);
    this.setState({ jsonResponse });
  }

  render() {
    const { url, method, body, jsonResponse } = this.state;
    return (
      <>
        <Controls
          url={url}
          method={method}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <History url={url} />
        <Display jsonResponse={jsonResponse} />
      </>
    );
  }
}
