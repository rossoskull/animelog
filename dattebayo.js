#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const dattebayo = fs.readFileSync(path.join(__dirname, 'arts', 'dattebayo.txt')).toString()

console.log(dattebayo)
