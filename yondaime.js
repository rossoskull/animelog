#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const yondaime = fs.readFileSync(path.join(__dirname, 'arts', 'yondaime.txt')).toString()

console.log(yondaime)
