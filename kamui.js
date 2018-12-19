#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const kamui = fs.readFileSync(path.join(__dirname, 'arts', 'kamui.txt')).toString()

console.log(kamui)
