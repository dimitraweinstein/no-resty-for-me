import React from 'react';
import { render, screen } from '@testing-library/react';
import RestyContainer from './RestyContainer';

describe('RESTy Container', () => {
  it('should render RESTy App components on page', () => {
    render(<RestyContainer />);

    screen.getByText('Loading...');

  });
});
