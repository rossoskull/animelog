#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const goku = fs.readFileSync(path.join(__dirname, 'arts', 'goku.txt')).toString()

console.log(goku)