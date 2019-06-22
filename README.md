# Lab 04 Buffer

### Author: Felipe Delatorre

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)

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
* `npm startInvert` Will transform baldy.bmp to inversion of colers. New file will be in the assets folder
  
#### Tests
* `npm test` Will run test