import React from 'react';
import { render, screen } from '@testing-library/react';
import RestyContainer from './RestyContainer';

describe('RESTy Container', () => {
  it('should render RESTy App components on page', async () => {
    render(<RestyContainer />);

    screen.getByAltText('loading spinner');

    const input = await screen.getByPlaceholderText('URL', { placeholder: '' });
    expect(input).toBeEmptyDOMElement();

    

  });
});
