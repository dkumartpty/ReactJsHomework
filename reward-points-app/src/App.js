import React, { useState, useEffect } from 'react';
import './App.css'

const RewardCalculator = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [rewardPointsByMonth, setRewardPointsByMonth] = useState([]);

  useEffect(() => {
    // Simulate an asynchronous API call to fetch transaction data
    const fetchTransactionData = async () => {
      try {
        // Simulated API response with transaction data
        const response = await fetch('/transactionData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch transaction data');
        }
        const data = await response.json();
        setTransactionData(data); // Assuming data is an array of transaction objects
      } catch (error) {
        console.error('Error fetching transaction data:', error.message);
        // Handle error gracefully, e.g., show a message to the user
      }
    };

    fetchTransactionData();
  }, []);

  const calculateRewardPoints = (transactions) => {
    // Initialize reward points accumulator
    let totalRewardPoints = 0;

    // Calculate reward points for each transaction
    transactions.forEach((transaction) => {
      const amountSpent = transaction.amount;
      if (amountSpent > 100) {
        // Points for dollars spent over $100
        totalRewardPoints += (amountSpent - 100) * 2;
      }
      if (amountSpent >= 50 && amountSpent <= 100) {
        // Points for dollars spent between $50 and $100
        totalRewardPoints += (amountSpent - 50);
      }
      // No points for dollars spent less than $50
    });

    return totalRewardPoints;
  };

  const calculateRewardPointsByMonth = () => {
    const pointsByMonth = {};

    // Group transactions by month and calculate points for each month
    transactionData.forEach((transaction) => {
      const transactionDate = new Date(transaction.date);
      const monthYear = `${transactionDate.getMonth() + 1}-${transactionDate.getFullYear()}`;
      if (!pointsByMonth[monthYear]) {
        pointsByMonth[monthYear] = [];
      }
      pointsByMonth[monthYear].push(transaction);
    });

    // Calculate total reward points for each month
    const result = Object.keys(pointsByMonth).map((key) => ({
      monthYear: key,
      rewardPoints: calculateRewardPoints(pointsByMonth[key]),
    }));

    setRewardPointsByMonth(result);
  };

  useEffect(() => {
    if (transactionData.length > 0) {
      calculateRewardPointsByMonth();
    }
  }, [transactionData]);

  return (
    <div className="reward-calculator-container">
    <h2>Reward Points Calculator</h2>
    <div>
      {rewardPointsByMonth.map((entry) => (
        <div key={entry.monthYear} className="month-container">
          <h3 className="month-header">{entry.monthYear}</h3>
          <p className="points-info">Total Reward Points: {entry.rewardPoints}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default RewardCalculator;
