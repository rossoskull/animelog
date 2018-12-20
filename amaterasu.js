#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const amaterasu = fs.readFileSync(path.join(__dirname, 'arts', 'amaterasu.txt')).toString()

console.log(amaterasu)
