/* eslint-disable max-len */
import React, { Component } from 'react';
import Controls from '../components/Controls';
import History from '../components/HistoryList';
import Display from '../components/Display';
import { fetchApi } from '../services/restyFetchApi';


export default class RestyContainer extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    jsonResponse: {
      'Fetch Me!': 'Fetch Me Right Now!'
    },
    urlList: [],
  }

  // localStoredURL = localStorage.getItem(this.state.url);

  handleChange = (event) => {
    this.setState({ [ event.target.name ]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { url, method, body, urlList } = this.state;
    // localStorage.setItem(['url'], this.state.url);
    fetchApi(url, method, body)
      // .then((url) => localStorage.setItem(url))
      .then((jsonResponse => this.setState({ jsonResponse })))
      .then(this.setState({ method, url, body }))
      .then((url, method) => this.setState(urlList.push({ method, url })));
    
    console.log(this.state, 'STATE------');
    console.log(urlList, 'URLs------');
  }

  render() {
    const { url, method, body, jsonResponse, urlList } = this.state;

    return (
      <>
        <Controls
          url={url}
          method={method}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <History
          urlList={urlList}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Display jsonResponse={jsonResponse} />
      </>
    );
  }
}
