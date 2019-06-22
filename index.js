'use strict';

const Bitmap = require('./lib/bitmap');
const transWith = require('./lib/transWith');

// TODO: Explain how this works (in your README)
const [file, operation] = process.argv.slice(2);

let bitmap = new Bitmap(file);

transWith.callback(file, bitmap, operation);

