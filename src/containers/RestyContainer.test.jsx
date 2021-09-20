import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RestyContainer from './RestyContainer';

describe('RESTy Container', () => {
  it('should render RESTy App components on page', async () => {
    render(<RestyContainer />);

    // eslint-disable-next-line max-len
    const urlInput = screen.getByPlaceholderText('URL', { placeholder: '' });
    expect(urlInput).toBeEmptyDOMElement();
    
    //test for radio buttons here
    const radioInput = await screen.findByDisplayValue('GET');
    userEvent.click(radioInput);

    //test raw json text area here
    //test for submit button here
    // const submit = screen.getByRole('button', { name: 'get-api' });
    // userEvent.click(submit);

    const ul = await screen.findByRole('list', { name: 'urls' });
    expect(ul).toBeInTheDocument();

    const div = await screen.findByRole('response', { name: 'response' });
    expect(div).toBeInTheDocument();

  });
});
