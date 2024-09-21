import { BankAccount } from '../src/BankAccount';


describe('deposit', () => {
    test('test 1, ok', ()=> {
        const bankAccount = new BankAccount(1000)

        bankAccount.deposit(10);
        expect(bankAccount.getBalance()).toBe(1010);

    })

    test('test 2, ko', ()=> {
        const bankAccount = new BankAccount(1000)

        const fnThrow = () => {
            bankAccount.deposit(-10)
        }
        expect(fnThrow).toThrow('Deposit amount must be positive')

    })
})

describe('withdraw', () => {
    test('test 1, ok', ()=> {
        const bankAccount = new BankAccount(1000)

        bankAccount.withdraw(10);
        expect(bankAccount.getBalance()).toBe(990);

    })

    test('test 2, ko', ()=> {
        const bankAccount = new BankAccount(1000)

        const fnThrow = () => {
            bankAccount.withdraw(-10)
        }
        expect(fnThrow).toThrow('Withdrawal amount must be positive')

    })

    test('test 3, ko', ()=> {
        const bankAccount = new BankAccount(1000)

        const fnThrow = () => {
            bankAccount.withdraw(2000)
        }
        expect(fnThrow).toThrow('Insufficient funds')

    })
})

describe('default constructor', () => {
    test('test 1, ok', ()=> {
        const bankAccount = new BankAccount()

        expect(bankAccount.getBalance()).toBe(0);

    })
})