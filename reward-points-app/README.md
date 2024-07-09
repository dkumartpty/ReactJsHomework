# Overview
The Reward Points Calculator is a React component (App.js) that simulates a retailer's rewards program. It fetches transaction data from a simulated JSON file (transactionData.json), calculates reward points based on predefined rules, and displays the total reward points earned per month for each customer.

# Installation
1.Clone the repository:
git clone https://github.com/dkumartpty/ReactJsHomework.git
cd reward-points-app

2.Install dependencies:
npm install

3.Start the application:
npm start

4.Open http://localhost:3000 in your browser to view the application.

# Usage
Upon starting the application, it simulates an asynchronous API call to fetch transaction data from transactionData.json. Once data is fetched:

It calculates reward points based on the following rules:
 a)2 points for every dollar spent over $100 in each transaction.
 b)1 point for every dollar spent between $50 and $100 in each transaction.
It aggregates and displays the total reward points earned per month for each customer.

# Technologies Used
React JS
JavaScript (ES6+)
HTML/CSS

# screenshot of working and error 

[errorscreenshot.jpeg](./src/Screenshots/errorscreenshot.jpeg)

[WorkingScreenshot](./src/Screenshots/WorkingScreenshot.jpeg)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Documentation for RewardCalculator Component Tests

# Overview

The RewardCalculator component is designed to fetch transaction data and calculate reward points. This test suite ensures the component functions correctly by verifying the correct rendering of reward points and handling fetch errors gracefully.

# Test Suite: RewardCalculator Component

# Test Data

Mock transaction data is created to simulate real transactions.

const mockTransactionData = [
  { id: 1, date: '2024-07-01', amount: 120 },
  { id: 2, date: '2024-07-15', amount: 80 },
  { id: 3, date: '2024-06-20', amount: 60 },
];

# Setup and Teardown

beforeEach: Mocks the global fetch function to simulate successful data fetching.

afterEach: Restores the original fetch function to prevent side effects in other tests.

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(mockTransactionData),
  });
});

afterEach(() => {
  global.fetch.mockRestore();
});

# Tests

renders reward points by month correctly

Renders the RewardCalculator component.

Waits for the component to fetch and process data.

Asserts that the total reward points and specific months are displayed correctly.

test('renders reward points by month correctly', async () => {
  const { getByText } = render(<RewardCalculator />);
  await waitFor(() => {
    expect(getByText(/Total Reward Points:/i)).toBeInTheDocument();
    expect(getByText(/07-2024/i)).toBeInTheDocument();
    expect(getByText(/06-2024/i)).toBeInTheDocument();
  });
});

# handles error when fetching transaction data fails

Mocks a failed fetch request.

Renders the RewardCalculator component.

Waits for the component to handle the fetch error.

Asserts that an error message is displayed.

test('handles error when fetching transaction data fails', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: false,
  });

  const { getByText } = render(<RewardCalculator />);
  await waitFor(() => {
    expect(getByText(/Error fetching transaction data:/i)).toBeInTheDocument();
  });
});


Documentation for RewardCalculator Component Tests
Overview

The RewardCalculator component is designed to fetch transaction data and calculate reward points. This test suite ensures the component functions correctly by verifying the correct rendering of reward points and handling fetch errors gracefully.

Test Suite: RewardCalculator Component

Test Data

Mock transaction data is created to simulate real transactions.

javascript
Copy code
const mockTransactionData = [
  { id: 1, date: '2024-07-01', amount: 120 },
  { id: 2, date: '2024-07-15', amount: 80 },
  { id: 3, date: '2024-06-20', amount: 60 },
];
Setup and Teardown

beforeEach: Mocks the global fetch function to simulate successful data fetching.

afterEach: Restores the original fetch function to prevent side effects in other tests.

javascript
Copy code
beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(mockTransactionData),
  });
});

afterEach(() => {
  global.fetch.mockRestore();
});
Tests

renders reward points by month correctly

Renders the RewardCalculator component.

Waits for the component to fetch and process data.

Asserts that the total reward points and specific months are displayed correctly.

javascript
Copy code
test('renders reward points by month correctly', async () => {
  const { getByText } = render(<RewardCalculator />);
  await waitFor(() => {
    expect(getByText(/Total Reward Points:/i)).toBeInTheDocument();
    expect(getByText(/07-2024/i)).toBeInTheDocument();
    expect(getByText(/06-2024/i)).toBeInTheDocument();
  });
});
handles error when fetching transaction data fails

Mocks a failed fetch request.

Renders the RewardCalculator component.

Waits for the component to handle the fetch error.

Asserts that an error message is displayed.

javascript
Copy code
test('handles error when fetching transaction data fails', async () => {
  global.fetch.mockResolvedValueOnce({
    ok: false,
  });

  const { getByText } = render(<RewardCalculator />);
  await waitFor(() => {
    expect(getByText(/Error fetching transaction data:/i)).toBeInTheDocument();
  });
});
## Flow Diagram
# High-Level Flow

1.Start
2.Test Initialization
Set up mock data and fetch function.
3.Render Component
Render RewardCalculator component.
4.Check Fetch Success
If fetch succeeds, proceed to calculate and render reward points.
If fetch fails, proceed to render error message.
5.Assertions
Verify reward points and months are displayed correctly (on success).
Verify error message is displayed (on failure).
6.Cleanup
Restore original fetch function.
7.End

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Contact
Email: dkumartpty@gmail.com
GitHub: dkumartpty
