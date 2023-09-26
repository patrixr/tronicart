import test from 'ava';
import { present } from './present';

test('present(x)', (t) => {
  t.assert(present(1) == true);
  t.assert(present('0') == true);
  t.assert(present(0) == true);
  t.assert(present(null) == false);
  t.assert(present(undefined) == false);
});
