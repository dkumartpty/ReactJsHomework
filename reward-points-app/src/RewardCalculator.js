import React, { useState, useEffect } from 'react';
import './RewardCalculator.css'; // Import the CSS file

const RewardCalculator = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [monthlyPoints, setMonthlyPoints] = useState({});

  useEffect(() => {
    // Simulate asynchronous API call to fetch transaction data
    const fetchTransactionData = async () => {
      // Simulated data set (replace with actual API fetch)
      const transactionData = [
        { customerId: 1, amount: 120, date: '2024-06-15' },
        { customerId: 2, amount: 80, date: '2024-06-20' },
        { customerId: 1, amount: 150, date: '2024-07-05' },
        { customerId: 2, amount: 60, date: '2024-07-10' },
        { customerId: 1, amount: 90, date: '2024-08-03' }
      ];

      setTransactions(transactionData);
    };

    fetchTransactionData();
  }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    // Calculate points whenever transactions change
    const calculateRewardPoints = () => {
      const initialMonthlyPoints = {};
      const { totalPoints, monthlyPoints } = transactions.reduce((accumulated, transaction) => {
        let points = 0;
        const amount = transaction.amount;

        if (amount > 100) {
          points += 2 * (amount - 100); // Points for dollars over $100
          points += 50; // Points for dollars between $50 and $100
        } else if (amount > 50) {
          points += amount - 50; // Points for dollars between $50 and $100
        }

        accumulated.totalPoints += points;

        const transactionMonth = new Date(transaction.date);
        const month = transactionMonth.toLocaleString('default', { month: 'long' });

        if (!accumulated.monthlyPoints[month]) {
          accumulated.monthlyPoints[month] = {};
        }
        if (!accumulated.monthlyPoints[month][transaction.customerId]) {
          accumulated.monthlyPoints[month][transaction.customerId] = 0;
        }
        accumulated.monthlyPoints[month][transaction.customerId] += points;

        return accumulated;
      }, { totalPoints: 0, monthlyPoints: initialMonthlyPoints });

      setTotalPoints(totalPoints);
      setMonthlyPoints(monthlyPoints);
    };

    calculateRewardPoints();
  }, [transactions]); // Recalculate points whenever transactions change

  return (
    <div className="reward-points-container"> {/* Apply CSS class */}
      <h2>Reward Points Calculator</h2>
      <p>Total Reward Points: {totalPoints}</p>
      <h3>Monthly Reward Points</h3>
      <ul>
        {Object.keys(monthlyPoints).map(month => (
          <li key={month}>
            <h4>{month}</h4>
            <ul>
              {Object.keys(monthlyPoints[month]).map(customerId => (
                <li key={customerId}>
                  Customer {customerId}: {monthlyPoints[month][customerId]} points
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardCalculator;
