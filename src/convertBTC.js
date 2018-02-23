const request = require('request');

function convertBTC(currency = 'USD', amount = 1) {
    const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;
    request(url, (error, request, body) => {
        let response;
        try {
            response = JSON.parse(body);
        }
        catch (error) {
            console.log('Something wrong.');    
            return error;
        }

        console.log(`${amount} BTC to ${currency} = ${response.price}`);
    });
}

module.exports = convertBTC;