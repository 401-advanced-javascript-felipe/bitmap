'use strict';

const Bitmap = require('../lib/bitmap');

const transformations = require('../lib/transformations');
const transformationsGreySpy = jest.spyOn(transformations, 'transformGreyscale').mockImplementation();
const transformationsInvertSpy = jest.spyOn(transformations, 'doTheInversion').mockImplementation();
const transformationsPixelSpy = jest.spyOn(transformations, 'pixelate').mockImplementation();


describe('class Bitmap', () => {
  let bitmap;

  beforeEach(() => {
    bitmap = new Bitmap;
  });

  it('should be instace of class bitmap', () => {
    expect(bitmap).toBeInstanceOf(Bitmap);
  });

  it('should assign to to its file when using the construtor', () => {
    let file = 'file.txt';
    let newBitmap = new Bitmap(file);
    expect(newBitmap.file).toBe('file.txt');
  });

});


describe('transform()', () => {
  let bitmap;

  beforeEach(() => {
    let file = 'file.txt';
    bitmap = new Bitmap(file);
  });

  it('should call greyscale', () => {
    bitmap.transform('greyscale');
    expect(transformationsGreySpy).toHaveBeenCalled();
  });

  it('should call invert', () => {
    bitmap.transform('invert');
    expect(transformationsInvertSpy).toHaveBeenCalled();
  });

  it('should call pixel', () => {
    bitmap.transform('pixel');
    expect(transformationsPixelSpy).toHaveBeenCalled();
  });

});
