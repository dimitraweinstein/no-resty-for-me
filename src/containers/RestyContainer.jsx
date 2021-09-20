import React, { Component } from 'react';
import Controls from '../components/Controls';
import History from '../components/History';
import Display from '../components/Display';
import { fetchApi } from '../services/restyFetchApi';


export default class RestyContainer extends Component {
  state = {
    loading: false,
    url: '',
    body: '',
    jsonResponse: {},
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    //fetch data function here 
    const jsonResponse = await fetchApi(this.state.url);
    //set fetched data to state and set loading state to false
    this.setState({ jsonResponse, loading: false });
  }

  render() {
    const { loading, url, body, jsonResponse } = this.state;
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
            <History url={url} />
            <Display jsonResponse={jsonResponse} />
          </>
        )
        }
      </>
    );
  }
}
