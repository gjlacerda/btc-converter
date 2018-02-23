'use strict';

var request = require('request');
var chalk = require('chalk');
var ora = require('ora');

var spinner = ora({
    text: 'Retrieving Bitcoin data...',
    color: 'yellow'
});

function convertBTC() {
    var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var url = 'https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=' + currency.toUpperCase() + '&amount=' + amount;

    spinner.start();

    request(url, function (error, request, body) {
        var response = void 0;
        try {
            response = JSON.parse(body);
        } catch (error) {
            console.log(chalk.red('Something wrong.'));
            return error;
        }

        spinner.stop();

        console.log(chalk.red(amount) + ' BTC to ' + chalk.cyan(currency.toUpperCase()) + ' = ' + chalk.yellow(response.price));
    });
}

module.exports = convertBTC;