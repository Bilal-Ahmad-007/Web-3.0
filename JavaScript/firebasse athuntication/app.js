const firebaseConfig = {
    apiKey: "AIzaSyB8ebz-4QpPwfqZqixMhLWOf4fbWzMR7q0",
    authDomain: "fir-class-70e5d.firebaseapp.com",
    databaseURL: "https://fir-class-70e5d-default-rtdb.firebaseio.com",
    projectId: "fir-class-70e5d",
    storageBucket: "fir-class-70e5d.appspot.com",
    messagingSenderId: "453731556750",
    appId: "1:453731556750:web:825be914534d11162c18df"
  };

const frb = firebase.initializeApp(firebaseConfig);
console.log(frb.database)

function signup(){
    var email=document.getElementById("email");
    var password=document.getElementById("password");



    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
   
    var user = userCredential.user;
   console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.message)
  });

}

function login(){

    var email=document.getElementById("emailaddres");
    var password=document.getElementById("passwordaddres");



    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
   
    var user = userCredential.user;
    console.log(user)

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.message)
  });
}




function loginWithGoogle(){

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
   
    var credential = result.credential;

   
    var token = credential.accessToken;
    
    var user = result.user;
   
     console.log(user)
  }).catch((error) => {
   
    var errorCode = error.code;
    var errorMessage = error.message;

    var email = error.email;
   
    var credential = error.credential;
    console.log(errorMessage)
  });


}









function send(){

var name=document.getElementById("name")
var email=document.getElementById("email")


let obj={
    name:name.value,
    email:email.value
}

// console.log(obj)

frb.database().ref('student').push(obj)



}

function getdatafromfirebase(){
    // frb.database().ref('student').once('value',(data)=>{
    //     console.log(data.val())
    // })

    frb.database().ref('student').on('child_added',(data)=>{
        console.log(data.val())
    })

}

getdatafromfirebase()

function daletedatafromfirebase(){

    frb.database().ref('student/-NmgdTxST_Yy9aSDVTM6').remove()
}
daletedatafromfirebase()

function editdatafromfirebase(){
    frb.database().ref('student/-NmgbXh4ltNch5Aap14l').set({
        email:'bil12@gmail.com'
    })

}

editdatafromfirebase()