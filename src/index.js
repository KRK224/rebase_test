import release13 from './release/release13.js';
import release14 from './release/release14.js';
import * as mwmIp from './mwmIp/index';
import mwmIp from './mwmIp/index.js';

console.log('Hello main branch');
console.log('release/0.1.13 branch is added');

release13();
release14();
//
mwmIp.mwmIp();
mwmIp();
