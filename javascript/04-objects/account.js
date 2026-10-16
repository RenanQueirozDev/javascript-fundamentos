// Create an account object with the properties holder (a name) and balance (a number).
// Add two methods that return the account holder's name, written in different ways:
// getHolderNormal, written as a regular function;
// getHolderArrow, written as an arrow function.
// Both return this.holder.
// Add a third method, deposit(amount), written as a regular function, that adds amount to the balance using this.
// Before running the code, write down what you expect getHolderNormal() and getHolderArrow() to return.
// Call deposit(50) and then display account.balance. Run everything and compare the results with your prediction from item 4.

const account = {
    holder: "Renan",
    balance: 1450.00,

    getHolderNormal() {
        return this.holder;
    },

    getHolderArrow: () => {
        return this.holder;
    },

    deposit(amount) {
        this.balance += amount;
        return amount;
    }
};

account.deposit(150);
console.log(account.balance);
console.log(account.getHolderNormal());
console.log(account.getHolderArrow());