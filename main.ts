import { mkdirSync, writeFileSync } from 'node:fs';

// One letter: A for coffee, B for tea. Dan picked coffee.
const LETTER = 'A';

// The gate wants exactly 1 character of non-whitespace text; refuse loudly
// rather than writing an entry the judge never sees.
if ([...LETTER].length !== 1 || LETTER.trim().length === 0) {
  throw new Error('letter is ' + [...LETTER].length + ' characters, the gate wants exactly 1');
}

const dir = process.env.OUTPUT_DIR ?? '/output';
mkdirSync(dir, { recursive: true });
writeFileSync(dir + '/entry.txt', LETTER, 'utf8');
