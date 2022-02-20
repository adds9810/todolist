// //app.js
// const assert = require('assert');

// describe('Array', () => {
//   describe('#indexOf()', () => {
//     it('should return -1 when the value is not present', () => {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//     it('should return 1 when the value is 2', () => {
//       assert.equal([1, 2, 3].indexOf(2), 1);
//     });
//   });
// });

import { todo, todoFun } from '../app.js';
import assert from 'assert';
import jsdom from 'mocha-jsdom';
global.document = jsdom({ url: 'http://localhost' });

describe('App test!', function () {
  it('todo should return "complete"', function () {
    assert.equal(todo(), 'todo complete');
  });
});
