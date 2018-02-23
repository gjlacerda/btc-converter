const request = require('request');
const chalk = require('chalk');
const ora = require('ora');

const spinner = ora({
    text: 'Retrieving Bitcoin data...',
    color: 'yellow'
});

function convertBTC(currency = 'USD', amount = 1) {
    const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency.toUpperCase()}&amount=${amount}`;

    spinner.start();

    request(url, (error, request, body) => {
        let response;
        try {
            response = JSON.parse(body);
        }
        catch (error) {
            console.log(chalk.red('Something wrong.'));    
            return error;
        }

        spinner.stop();

        console.log(`${chalk.red(amount)} BTC to ${chalk.cyan(currency.toUpperCase())} = ${chalk.yellow(response.price)}`);
    });
}

module.exports = convertBTC;