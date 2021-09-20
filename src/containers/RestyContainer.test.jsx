import React from 'react';
import { render, screen } from '@testing-library/react';
import RestyContainer from './RestyContainer';

describe('RESTy Container', () => {
  it('should render RESTy App components on page', async () => {
    render(<RestyContainer />);

    // screen.getByAltText('loading spinner');

    const input = await screen.getByPlaceholderText('URL', { placeholder: '' });
    expect(input).toBeEmptyDOMElement();

    //test for submit button here

    const ul = await screen.findByRole('list', { name: 'urls' });
    expect(ul).toBeInTheDocument();

    const div = await screen.findByRole('response', { name: 'response' });
    expect(div).toBeInTheDocument();

  });
});
