const expect = require('chai').expect;
const exec = require('child_process').exec;
const pkg = require('../package.json');
const btcConverter = './src/main.js';

describe('main CLI', () => {
    it('should return the version of the app', (done) => {
        exec(`${btcConverter} --version`, (err, stdout, stderr) => {
            if (err) {
                throw err;
            }
            expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
            done();
        });
    });
});