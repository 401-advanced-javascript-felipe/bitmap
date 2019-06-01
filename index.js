'use strict';

const fs = require('fs');

/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor
 */
function Bitmap(filePath) {
  this.file = filePath;
}


/**
 * Bitmap -- Offset values
 */
const PIXEL_OFFSET = 10;
const COLOR_TABLE_OFFSET = 54;

/**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */
Bitmap.prototype.parse = function(buffer) {
  this.buffer = buffer;
  this.type = buffer.toString('utf-8', 0, 2);
  this.pixelOffset = buffer.readInt32LE(PIXEL_OFFSET);
  this.colorArray = buffer.slice(COLOR_TABLE_OFFSET, Bitmap.pixelOffset);

  //... and so on
};

/**
 * Transform a bitmap using some set of rules. The operation points to some function, which will operate on a bitmap instance
 * @param operation
 */
Bitmap.prototype.transform = function(operation) {
  // This is really assumptive and unsafe
  console.log(typeof operation);
  transforms[operation](this);
  this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};

/**
 * Sample Transformer (greyscale)
 * Would be called by Bitmap.transform('greyscale')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */
const transformGreyscale = (bmp) => {

  console.log('Transforming bitmap into greyscale', bmp);

  for(let i = 0; i < bmp.colorArray.length; i += 4){
    let gray = (bmp.colorArray[i] + bmp.colorArray[i+1] + bmp.colorArray[i+2]) / 3;
    bmp.colorArray[i] = gray;
    bmp.colorArray[i+1] = gray;
    bmp.colorArray[i+2] = gray;
  }

};

const doTheInversion = (bmp) => {

  console.log('Transforming bitmap into invert', bmp);

  for (var i = 0; i < bmp.colorArray.length; i+= 4) {
    bmp.colorArray[i] = bmp.colorArray[i] ^ 255; // Invert Red
    bmp.colorArray[i+1] = bmp.colorArray[i+1] ^ 255; // Invert Green
    bmp.colorArray[i+2] = bmp.colorArray[i+2] ^ 255; // Invert Blue
  }
};

/**
 * A dictionary of transformations
 * Each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
 */
const transforms = {
  greyscale: transformGreyscale,
  invert: doTheInversion
};

// ------------------ GET TO WORK ------------------- //

function transformWithCallbacks(operation) {

  fs.readFile(file, (err, buffer) => {

    if (err) {
      throw err;
    }

    bitmap.parse(buffer);
    console.log(bitmap);
    bitmap.transform(operation);

    // Note that this has to be nested!
    // Also, it uses the bitmap's instance properties for the name and thew new buffer
    fs.writeFile(bitmap.newFile, bitmap.buffer, (err, out) => {
      if (err) {
        throw err;
      }
      console.log(`Bitmap Transformed: ${bitmap.newFile}`);
    });

  });
}

// TODO: Explain how this works (in your README)
const [file, operation] = process.argv.slice(2);

let bitmap = new Bitmap(file);

transformWithCallbacks(operation);

