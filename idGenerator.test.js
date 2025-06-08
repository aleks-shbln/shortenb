import test from 'node:test';
import assert from 'node:assert/strict';
import { nextId, toBase38 } from './idGenerator.js';

test('first call to nextId should receive 1', (t) => {
  assert.strictEqual(nextId(), "1");
});

test('should convert to base38', (t) => {
  assert.strictEqual(toBase38(0), "0");
  assert.strictEqual(toBase38(1), "1");
  assert.strictEqual(toBase38(10), "a");
  assert.strictEqual(toBase38(37), "_");
  assert.strictEqual(toBase38(38), "10");
  assert.strictEqual(toBase38(39), "11");
  assert.strictEqual(toBase38(10000), "6z6");
  assert.strictEqual(toBase38(14870), "abc");
  assert.strictEqual(toBase38(565060), "abc0");
  assert.strictEqual(toBase38(9_007_199_254_740_991), "1gjpke8u2l9");
});