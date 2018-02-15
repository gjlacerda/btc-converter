#!/usr/bin/env node

const pkg = require('../package.json');
const app = require('commander');

app
    .version(pkg.version)
    .description('Convert Bitcoin to any currency defined.')
    .parse(process.argv);