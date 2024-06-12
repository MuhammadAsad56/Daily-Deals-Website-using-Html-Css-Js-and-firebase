  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDsaPNqiTQNsqq1iVmB05XeUt6me2oMFik",
    authDomain: "products-sell-2e4aa.firebaseapp.com",
    databaseURL: "https://products-sell-2e4aa-default-rtdb.firebaseio.com",
    projectId: "products-sell-2e4aa",
    storageBucket: "products-sell-2e4aa.appspot.com",
    messagingSenderId: "808057905207",
    appId: "1:808057905207:web:36dfb0bcc8e209af899fb2",
    measurementId: "G-8TC80EVQ02"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth()

var userName = document.getElementById('userName')
var email = document.getElementById('email')
var password = document.getElementById('password')

window.signInUser = function(){
  if(userName.value && email.value && password.value){
    var obj = {
      userName: userName.value,
      email: email.value,
      password: password.value
    }
    console.log(obj);
   createUserWithEmailAndPassword(auth, obj.email, obj.password)
   .then(function(res){
    userName.value = "", email.value = "", password.value = "";
    window.location.assign("./products/products.html")
   })
   .catch(function(rej){
    if(rej.message === "Firebase: Error (auth/invalid-email)."){
        alert("invalid-email")
    }
   else if(rej.message === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
        alert("Password should be at least 6 characters")
    }
   else if(rej.message === "Firebase: Error (auth/email-already-in-use)."){
        alert("this-email-already-in-use")
    }
})

  }else{
    alert("please enter all fields")
  }
}