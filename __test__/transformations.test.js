'use strict';

const transformations = require('../lib/transformations');




describe('Greyscale Module', () => {

  let obj;
  beforeEach(() => {

    obj = {
      file: './assets/baldy.bmp',
      buffer: [],
      type: 'BM',
      fileSize: 15146,
      pixelOffset: 1146,
      width: 110,
      heigt: 125,
      bytesPerPixel: 8,
      colorArray: [7, 150, 23, 1],
      pixelData: [],
    };
  });


  it('Greyscales a bitmap', () => {
    transformations.transformGreyscale(obj);

    expect(obj.colorArray[0]).toEqual(60);
    expect(obj.colorArray[1]).toEqual(60);
    expect(obj.colorArray[2]).toEqual(60);
    expect(obj.colorArray[3]).toEqual(1);
  });

  it('Inversions a bitmap', () => {
    transformations.doTheInversion(obj);

    expect(obj.colorArray[0]).toEqual(248);
    expect(obj.colorArray[1]).toEqual(105);
    expect(obj.colorArray[2]).toEqual(232);
    expect(obj.colorArray[3]).toEqual(1);
  });

  it('Pixelates a bitmap', () => {
    transformations.pixelate(obj);

    expect(obj.colorArray[0]).toEqual(7);
    expect(obj.colorArray[1]).toEqual(150);
    expect(obj.colorArray[2]).toEqual(23);
    expect(obj.colorArray[3]).toEqual(1);
  });



});
