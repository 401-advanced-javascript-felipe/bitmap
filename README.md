# Lab 04 Buffer

### Author: Felipe Delatorre

### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-felipe/bitmap/pull/2)
* [travis](https://travis-ci.com/401-advanced-javascript-felipe/bitmap/builds/116528772)

### Modules

###### bitmap.js
* class `bitmap`. Holds bpm raw data as a buffer. Helps selecting transformation method

###### transformations.js
*  `transformGreyscale(bitmap) ->` manipulate its buffer data
*  `doInverse(bitmap) ->` manipulate its buffer data

###### transWith.js
* Runs the primary function of the app. Leaving index.js cleaner

#### Running the app
* `npm start` Will transform baldy.bmp to grayscale. New file will be in the assets folder
* `npm run startInvert` Will transform baldy.bmp to inversion of colors. New file will be in the assets folder
* `npm run startPixel` Will pixelate baldy.bmp. New file will be in the assets folder

  startPixel
#### Tests
* `npm test` Will run test