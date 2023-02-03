// import {strict as assert} from 'node:assert';
import assert from 'node:assert/strict';

const arr1 = [[[1, 2, 3]], 4, 5];
const arr2 = [[[1, 2, '3']], 4, 5];

assert.deepEqual(arr1, arr2);
