import assert from 'node:assert/strict';
import { saveCategoryProgressToStorage } from '../src/pokemonCompletion/persistence.js';

const storage = new Map<string, string>();
const fakeStorage = {
  setItem(key: string, value: string) {
    storage.set(key, value);
  },
};

const result = saveCategoryProgressToStorage({
  game: 'crystal',
  id: 'test-cat',
  list: [
    { id: 'a', obtained: true },
    { id: 'b', obtained: false },
    { id: 'c', obtained: true },
  ],
}, fakeStorage as Pick<Storage, 'setItem'>);

assert.equal(result, 'a,c');
assert.equal(storage.get('pokemonCompletion-crystal-test-cat'), 'a,c');
console.log('persistence regression test passed');
