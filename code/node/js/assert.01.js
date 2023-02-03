// import {strict as assert} from 'node:assert';
// import assert from 'node:assert/strict';
// import { equal, deepEqual, notEqual, notDeepEqual } from 'node:assert/strict';
import { equal, deepEqual, notEqual, notDeepEqual } from 'node:assert';

const arr1 = [[[1, 2, 3]], 4, 5];
const arr2 = [[[1, 2, '3']], 4, 5];

const err = new Error('判断错误!');

// equal(arr1, arr2, err);
// deepEqual(arr1, arr2, err);
notEqual(arr1, arr2, err);
// notDeepEqual(arr1, arr2, err);
