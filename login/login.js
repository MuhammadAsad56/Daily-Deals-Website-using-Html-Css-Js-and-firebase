  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

  var email = document.getElementById("email")
  var password = document.getElementById("password")


  window.loginUser = function(){
    var obj = {
        email: email.value,
        password: password.value
     }
     signInWithEmailAndPassword(auth, obj.email, obj.password)
     .then(function(res){
      email.value = "", password.value = ""
      window.location.assign("../products/products.html")
     })
     .catch(function(rej){
        if(rej.message === "Firebase: Error (auth/invalid-credential)."){
            alert("incorrect email or password")
          }
          else if(rej.message === "Firebase: Error (auth/invalid-email)."){
          let input = document.querySelectorAll(".input input")
            input.forEach(function(e){
              e.style.border = "1px solid red"
            })
          }
     })
     .catch(function(rej){
        alert(rej.message)
     })
  }