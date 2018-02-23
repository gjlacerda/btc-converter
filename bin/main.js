#!/usr/bin/env node
'use strict';

var pkg = require('../package.json');
var app = require('commander');
var convertBTC = require('./convertBTC');

app.version(pkg.version).description('Convert Bitcoin to any currency defined.').option('-c, --currency <currency>', 'Currency to be converted. (Default: USD)').option('-a, --amount <amount>', 'Value in Bitcoin to convert. (Default: 1)').parse(process.argv);

convertBTC(app.currency, app.amount);