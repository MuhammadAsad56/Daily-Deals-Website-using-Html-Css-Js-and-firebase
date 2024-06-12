  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getDatabase,ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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
 const db = getDatabase()

var img = document.querySelector(".img img")
var prize = document.getElementById("prize")
var details = document.getElementById("details")
var description = document.getElementById("description")
var location = document.getElementById("location")
var number = document.getElementById("number")


 function getData(){
    var id = localStorage.getItem("proid")
    var reference = ref(db , `ProductDetails/${id}`)
    onValue(reference, function(data){
      var clickProdData = data.val()  
      img.src = clickProdData.imgUrl
      img.innerHTML = clickProdData.imgUrl
      prize.innerHTML = clickProdData.price
      details.innerHTML = clickProdData.details
      description.innerHTML = clickProdData.description
      location.innerHTML = clickProdData.location
      number.innerHTML = clickProdData.number
    })
 }
 getData()