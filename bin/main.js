#!/usr/bin/env node
'use strict';

var pkg = require('../package.json');
var app = require('commander');

app.version(pkg.version).description('Convert Bitcoin to any currency defined.').parse(process.argv);