'use strict';

let transforms = require('./transformations');

/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor
 */
class Bitmap {
  constructor(filePath){
    this.file = filePath;
  }

  /**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */
  parse(buffer){
    this.buffer = buffer;
    this.type = buffer.toString('utf-8', 0, 2);
    this.pixelOffset = buffer.readInt32LE(_PIXEL_OFFSET);
    this.colorArray = buffer.slice(_COLOR_TABLE_OFFSET, Bitmap.pixelOffset);
    this.pixelData = buffer.slice(this.pixelOffset);
  }

  /**
 * Transform a bitmap using some set of rules. The operation points to some function, which will operate on a bitmap instance
 * @param operation
 */

  transform(operation) {
    operation = operation.toLowerCase();
    switch(operation) {
    case 'greyscale': transforms.transformGreyscale(this); break;
    case 'invert': transforms.doTheInversion(this); break;
    case 'pixel': transforms.pixelate(this); break;
    }
    this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);

  }

}

const _PIXEL_OFFSET = 10;
const _COLOR_TABLE_OFFSET = 54;

module.exports = exports = Bitmap;
