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
    this.setState({
      [ event.target.name ]: event.target.value
    });
  }

  // handleClick = (event) => {
  //   event.preventDefault();
  //   const { url } = localStorage;
  //   localStorage.getItem({
  //     url: url.url,
  //     method: url.method
  //   });
    
  // }

  handleSubmit = (event) => {
    event.preventDefault();

    const { url, method, body, urlList } = this.state;

    fetchApi(url, method, body)
      .then((jsonResponse => this.setState({
        jsonResponse,
        method,
        url,
        body,
        urlList: [...urlList,
          {
            method,
            url
          }
        ]
      })));
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
          onClick={this.handleClick}
          onSubmit={this.handleSubmit}
        />
        <Display jsonResponse={jsonResponse} />
      </>
    );
  }
}
