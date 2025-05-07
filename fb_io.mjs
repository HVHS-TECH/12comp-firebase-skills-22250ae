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
import { ref, set }
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { signOut }
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { onAuthStateChanged }
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getAuth, GoogleAuthProvider, signInWithPopup }
from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { initializeApp }
from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics }
from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
var FB_GAMEDB;
function fb_initialise() {
    
    console.log('%c fb_initialise(): ', 
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    console.log("Hello world");
    const FB_GAMECONFIG = {
        apiKey: "AIzaSyDHgtIZMIZCJPiRtsGfPR7U7MRHkROTFH4",
        authDomain: "comp2025-anthony-elliott.firebaseapp.com",
        databaseURL: "https://comp2025-anthony-elliott-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp2025-anthony-elliott",
        storageBucket: "comp2025-anthony-elliott.firebasestorage.app",
        messagingSenderId: "547175988310",
        appId: "1:547175988310:web:2d1b6a9924211d2d600ff7",
        measurementId: "G-KC1L63N0S9"
      };
    
    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
    
    const FB_GAMEDB  = getAnalytics(FB_GAMEAPP);
      console.info(FB_GAMEDB);

}
function fb_authenticate(){
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

    signInWithPopup(AUTH, PROVIDER).then((result) => {
        console.log("Authentication succesful");
        console.log(result);
    })

    .catch((error) => {
        console.log("Authentication unsuccesful");
        console.log(error);
        const AUTH = getAuth();
    
        }, (error) => {
    
            console.log("error");
    
        });
    };

function fb_authchange(){
    const AUTH = getAuth();
    onAuthStateChanged(AUTH, (user) => {

        if (user) {

            console.log("user logged in")
        } else {

            console.log("user logged out")

        }

    }, (error) => {

        console.log("unsuccesful log in")

    });


}
function fb_signout(){
    const AUTH = getAuth();
    signOut(AUTH).then(() => {
        console.log("succesfully signed out")
    })

    .catch((error) => {

        console.log("unsuccesfully signed out")

    });
}
function fb_write(){
    const REF = ref(FB_GAMEDB, stupid/dumb);

    set(REF, {name: 'ants', score: '66'}).then(() => {

        console.log("succesful write")

    }).catch((error) => {

        console.log("unsuccesful write")

    });

  
}
export { 
    fb_initialise, fb_authenticate, fb_signout, fb_authchange, fb_write
 };





/**************************************************************/
// END OF CODE
/**************************************************************/