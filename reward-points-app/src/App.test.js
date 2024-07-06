import React from 'react';
import { render } from '@testing-library/react';
import RewardCalculator from './App';

// Mock fetch API (optional for simple rendering test)
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]), // Empty array or appropriate mock data
  })
);

describe('RewardCalculator', () => {
  it('renders without crashing', async () => {
    render(<RewardCalculator/>);
    
    // Optionally wait for some time if needed
    // await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Basic assertion to check if the component renders without throwing an error
    expect(true).toBeTruthy();
  });
});
