/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by <Your Name Here>, Term 2 202?
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c main.mjs', 
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required

/**************************************************************/
// Import all the constants & functions required from fb_io module

import { fb_initialise, fb_authenticate, fb_signout, fb_authchange, fb_write}
    from './fb_io.mjs';
    window.fb_initialise   = fb_initialise;
    window.fb_authenticate   = fb_authenticate;
    window.fb_signout   = fb_signout;
    window.fb_authchange   = fb_authchange;
    window.fb_write   = fb_write;
 
/**************************************************************/
// index.html main code
/**************************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/
