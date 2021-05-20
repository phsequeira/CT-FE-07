import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Dad Jokes', () => {
  it('renders a list of jokes', async () => {
      render(<App />);

      screen.getByText('Loading...');

      const ul = await screen.findByRole('list', {name: 'jokes'});
      expect(ul).toMatchSnapshot();
  })
})