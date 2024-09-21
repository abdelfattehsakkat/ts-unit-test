# Bank Account Project

This is a basic TypeScript project that implements a simple `BankAccount` class. The project is intended as a starting point for practicing unit testing with Jest in TypeScript.

## Project Structure

├── src/

│ └── BankAccount.ts # Main implementation of the BankAccount class

├── test/ # Test directory (empty in this branch)

├── package.json

├── tsconfig.json

└── jest.config.js

## Installation

To set up this project on your local machine, you'll need to have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:
```bash
   git clone https://github.com/abdelfattehsakkat/ts-unit-test.git
```

2. Navigate to the project directory:

```bash
cd ts-unit-test
```

3. Install the dependencies:

```bash
npm install
```

## Writing Tests
The primary purpose of this project is to practice writing unit tests for the BankAccount class.

The BankAccount class supports the following operations:

Deposit funds: deposit(amount: number): void
Withdraw funds: withdraw(amount: number): void
Check balance: getBalance(): number
You are invited to write tests to validate the behavior of these methods. Create your test files in the test/ directory. (jest is already configured!)

## Example Test (Suggested)
Here's a starting point for a test file:

```typescript

import { BankAccount } from '../src/BankAccount';

describe('BankAccount', () => {
  test('should correctly update balance after deposit', () => {
    const bankAccount = new BankAccount(1000);
    bankAccount.deposit(500);
    expect(bankAccount.getBalance()).toBe(1500);
  });
  
  // Add more tests here
});

```
## To run the tests with Jest:

```bash
npm test
```

## Hint

**main**: Contains the BankAccount class implementation. You are expected to create your tests in this branch.

**solution**: Contains example tests for the BankAccount class.