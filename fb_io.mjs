//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
const COL_C = 'white';	
const COL_B = '#CD7F32';
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules

import { initializeApp }
 from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } 
from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

function fb_initialise() {
    
    console.log('%c fb_initialise(): ', 
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    console.log("Hello world");
    const firebaseConfig = {
        apiKey: "AIzaSyDHgtIZMIZCJPiRtsGfPR7U7MRHkROTFH4",
        authDomain: "comp2025-anthony-elliott.firebaseapp.com",
        databaseURL: "https://comp2025-anthony-elliott-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp2025-anthony-elliott",
        storageBucket: "comp2025-anthony-elliott.firebasestorage.app",
        messagingSenderId: "547175988310",
        appId: "1:547175988310:web:2d1b6a9924211d2d600ff7",
        measurementId: "G-KC1L63N0S9"
      };
      const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.info(analytics);  
}
fb_authenticate()
export { 
    fb_initialise
    fb_authenticate
 };




/**************************************************************/
// END OF CODE
/**************************************************************/