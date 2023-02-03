// import {strict as assert} from 'node:assert';
// import assert from 'node:assert/strict';
// import { equal, deepEqual, notEqual, notDeepEqual, AssertionError } from 'node:assert/strict';
import { equal, deepEqual, notEqual, notDeepEqual, AssertionError } from 'node:assert';

const arr1 = [[[1, 2, 3]], 4, 5];
const arr2 = [[[1, 2, '3']], 4, 5];

const err = (op) => {
  // return new Error(`[${op}] 判断错误!`);

  return new AssertionError({
    message: `[${op}] 判断错误!`,
    // actual: arr1,
    // expected: arr2,
    // operator: op,
  }).message;
};

// equal(arr1, arr2);
equal(arr1, arr2, err('equal'));
deepEqual(arr1, arr2, err('deepEqual'));
notEqual(arr1, arr2, err('notEqual'));
notDeepEqual(arr1, arr2, err('notDeepEqual'));
