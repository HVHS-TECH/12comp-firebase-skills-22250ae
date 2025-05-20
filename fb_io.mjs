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
import { ref, set, getDatabase, get, update, query, orderByChild, limitToFirst} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

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
    FB_GAMEDB  = getDatabase(FB_GAMEAPP);
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
    var dbReference = ref(FB_GAMEDB, "Users/UserID");
    var userInformation = {HighScore: 10, Name: 'Ant'};
    set(dbReference, userInformation).then(() => {
        console.log("succesful write")
    }).catch((error) => {
        console.log("unsuccesful write")
        console.log(error);
    });
}
function fb_read(){
    const dbReference = ref(FB_GAMEDB, "Users/UserID");
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log("succesful read")
            console.log(fb_data)
        } else {
            console.log("no record found")
        }
    }).catch((error) => {
        console.log("error with reading")
        console.log(error)
    });
}
function fb_readall(){
    const dbReference = ref(FB_GAMEDB, "Users");
console.log(dbReference)
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log("succesful readall")
            console.log(fb_data)
        } else {
            console.log("no record found")
        }
    }).catch((error) => {
        console.log("readall error")
        console.log(error)
    });
}
function fb_update(){
  const dbReference= ref(FB_GAMEDB, "Users/UserID");
    update(dbReference, {Name: "scott"}).then(() => {
        console.log("succesful update")
    }).catch((error) => {
        console.log("update error")
        console.log(error)
    });
}
function fb_readsorted(){
    var sortKey = "HighScore";
    const dbReference= query(ref(FB_GAMEDB, "Users"), orderByChild(sortKey), limitToFirst(5));
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
      if (fb_data != null) {
        get(dbReference).then((allScoreDataSnapshot) => {
            allScoreDataSnapshot.forEach(function(userScoreSnapshot) {
                var obj = userScoreSnapshot.val();
                console.log(obj);
            });
        });
            console.log(fb_data)
           console.log("succesful sorted read")
        } else {
           console.log("no record found")
        }
    }).catch((error) => {
        console.log("error reading")
        console.log(error)
    });
}
export { 
    fb_initialise, fb_authenticate, fb_signout, fb_authchange, fb_write, fb_read, fb_readall, fb_update, fb_readsorted
 };
/**************************************************************/
// END OF CODE
/**************************************************************/