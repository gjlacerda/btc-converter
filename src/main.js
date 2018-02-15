#!/usr/bin/env node

const pkg = require('../package.json');

const app = require('commander');
app
    .version(pkg.version)
    .parse(process.argv);