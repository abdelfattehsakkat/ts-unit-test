export class BankAccount {
    private balance: number;
  
    constructor(initialBalance: number = 0) {
      this.balance = initialBalance;
    }
  
    deposit(amount: number): void {
      if (amount <= 0) {
        throw new Error('Deposit amount must be positive');
      }
      this.balance += amount;
    }
  
    withdraw(amount: number): void {
      if (amount <= 0) {
        throw new Error('Withdrawal amount must be positive');
      }
      if (amount > this.balance) {
        throw new Error('Insufficient funds');
      }
      this.balance -= amount;
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  