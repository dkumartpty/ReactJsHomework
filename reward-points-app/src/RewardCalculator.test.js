import React from 'react';
import { render, waitFor } from '@testing-library/react';
import RewardCalculator from './RewardCalculator';

describe('RewardCalculator Component', () => {
  // Mock transaction data for testing
  const mockTransactionData = [
    { id: 1, date: '2024-07-01', amount: 120 },
    { id: 2, date: '2024-07-15', amount: 80 },
    { id: 3, date: '2024-06-20', amount: 60 },
    // Add more mock data as needed
  ];

  beforeEach(() => {
    // Mock a successful fetch request
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockTransactionData),
    });
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  test('renders reward points by month correctly', async () => {
    const { getByText } = render(<RewardCalculator />);
    await waitFor(() => {
      expect(getByText(/Total Reward Points:/i)).toBeInTheDocument();
      expect(getByText(/07-2024/i)).toBeInTheDocument();
      expect(getByText(/06-2024/i)).toBeInTheDocument();
    });
  });

  test('handles error when fetching transaction data fails', async () => {
    // Mock a failed fetch request
    global.fetch.mockResolvedValueOnce({
      ok: false,
    });

    const { getByText } = render(<RewardCalculator />);
    await waitFor(() => {
      expect(getByText(/Error fetching transaction data:/i)).toBeInTheDocument();
    });
  });
});
