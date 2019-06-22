'use strict';

module.exports = exports = {};

/**
 * Sample Transformer (greyscale)
 * Would be called by Bitmap.transform('greyscale')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */
exports.transformGreyscale = (bmp) => {

  console.log('Transforming bitmap into greyscale');

  for(let i = 0; i < bmp.colorArray.length; i += 4){
    let gray = (bmp.colorArray[i] + bmp.colorArray[i+1] + bmp.colorArray[i+2]) / 3;
    bmp.colorArray[i] = gray;
    bmp.colorArray[i+1] = gray;
    bmp.colorArray[i+2] = gray;
  }

};

exports.doTheInversion = (bmp) => {

  console.log('Transforming bitmap into invert');

  for (var i = 0; i < bmp.colorArray.length; i+= 4) {
    bmp.colorArray[i] = bmp.colorArray[i] ^ 255; // Invert Red
    bmp.colorArray[i+1] = bmp.colorArray[i+1] ^ 255; // Invert Green
    bmp.colorArray[i+2] = bmp.colorArray[i+2] ^ 255; // Invert Blue
  }
};

exports.pixelate = (bmp) => {
  console.log('Pixelating bitmap');

  for (let i = 0; i < bmp.pixelData.length; i+=5) {
    let rando = Math.floor((Math.random()*5)+1);
    bmp.pixelData[i+rando] = null;
  }
};
