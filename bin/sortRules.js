#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const eslintrcPath = path.join(__dirname, '../.eslintrc');
const eslintrc = JSON.parse(fs.readFileSync(eslintrcPath, 'utf8'));
const rules = eslintrc.rules;
const keys = Object.keys(rules).sort();
const sortedRules = {};

for (let i = 0; i < keys.length; ++i) {
  sortedRules[keys[i]] = rules[keys[i]];
}

console.log(JSON.stringify(sortedRules));
