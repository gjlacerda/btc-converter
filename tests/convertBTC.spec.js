const chai = require('chai');
const expect = chai.expect;
const convertBTC = require('../src/convertBTC');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const nock = require('nock');
const chalk = require('chalk');

chai.use(sinonChai);

describe('convertBTC', () => {
    let consoleStub;
    
    const responseMock = {
        "price": 22213.54,
        "success": true,
        "time": "2018-02-21 00:06:34"
    };

    beforeEach(() => {
        consoleStub = sinon.stub(console, 'log');
    });

    afterEach(() => {
        consoleStub.restore();
    });
    
    it('should use currency USD and 1 as amount default', (done) => {
        nock('https://apiv2.bitcoinaverage.com')
            .get('/convert/global')
            .query({
                from: 'BTC',
                to: 'USD',
                amount: 1
            })
            .reply(200, responseMock)

        convertBTC();

        setTimeout(() => {
            expect(consoleStub).to.have.been.calledWith(`${chalk.red(1)} BTC to ${chalk.cyan('USD')} = ${chalk.yellow(22213.54)}`);
            done();
        }, 300);
    });

    it('should use currency USD and 10 as amount default', (done) => {
        nock('https://apiv2.bitcoinaverage.com')
            .get('/convert/global')
            .query({
                from: 'BTC',
                to: 'USD',
                amount: 10
            })
            .reply(200, responseMock)

        convertBTC('USD', 10);

        setTimeout(() => {
            expect(consoleStub).to.have.been.calledWith(`${chalk.red(10)} BTC to ${chalk.cyan('USD')} = ${chalk.yellow(22213.54)}`);
            done();
        }, 300);
    });

    it('should use currency BRL and 1 as amount default', (done) => {
        nock('https://apiv2.bitcoinaverage.com')
            .get('/convert/global')
            .query({
                from: 'BTC',
                to: 'BRL',
                amount: 1
            })
            .reply(200, responseMock)

        convertBTC('BRL');

        setTimeout(() => {
            expect(consoleStub).to.have.been.calledWith(`${chalk.red(1)} BTC to ${chalk.cyan('BRL')} = ${chalk.yellow(22213.54)}`);
            done();
        }, 300);
    });

    it('should use currency BRL and 1 as amount default', (done) => {
        nock('https://apiv2.bitcoinaverage.com')
            .get('/convert/global')
            .query({
                from: 'BTC',
                to: 'BRL',
                amount: 1
            })
            .reply(200, responseMock)

        convertBTC('BRL');

        setTimeout(() => {
            expect(consoleStub).to.have.been.calledWith(`${chalk.red(1)} BTC to ${chalk.cyan('BRL')} = ${chalk.yellow(22213.54)}`);
            done();
        }, 300);
    });

    it('should message user when api reply with error', (done) => {
        nock('https://apiv2.bitcoinaverage.com')
            .get('/convert/global')
            .query({
                from: 'BTC',
                to: 'BRL',
                amount: 1
            })
            .replyWithError('Error')

        convertBTC('BRL');

        setTimeout(() => {
            expect(consoleStub).to.have.been.calledWith(chalk.red('Something wrong.'));
            done();
        }, 300);
    });
});
