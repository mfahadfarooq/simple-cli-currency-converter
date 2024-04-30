import inquirer from "inquirer";
let currency = {
    USD: 1, //base
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let prompt = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter From Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: 'to',
        message: 'Enter To Currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: 'amount',
        message: 'Enter amount',
        type: 'number'
    }
]);
let from = currency[prompt.from];
let to = currency[prompt.to];
let amount = prompt.amount;
let baseAmount = amount / from;
let convertedAmount = baseAmount * to;
console.log(`${convertedAmount.toFixed(2)} ${prompt.to}`);
