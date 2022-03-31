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
//   });1
// });

import App from '../App.js';
import assert from 'assert';
import MESSAGES from '../messages.js';

const testTxt = '입력된 할 일';
let result;
let expect;

describe('App init!', () => {
  describe('App init!', () => {
    App.setData(testTxt);
    result = testTxt;
    expect = JSON.stringify(localStorage.getItem('todoList'));
    it('할일 등록 결과', () => {
      assert.strictEqual(result, expect[0]);
    });
  });
});
