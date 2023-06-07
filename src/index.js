import release13 from './release/release13.js';
import release14 from './release/release14.js';
import * as mwmIp from './mwmIp/index';

console.log('Hello main branch');
console.log('release/0.1.13 branch is added');

release13();
release14();
//
mwmIp.mwmIp();
