import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders app title correctly', async () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/My Reward App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders RewardCalculator component', async () => {
    const { getByText } = render(<App />);
    const rewardCalculatorElement = getByText(/Reward Points Calculator/i);
    expect(rewardCalculatorElement).toBeInTheDocument();
  });
});
