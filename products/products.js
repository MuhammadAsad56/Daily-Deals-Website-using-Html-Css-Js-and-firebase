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

 var products = document.getElementById("products");

 function getData(){
    var reference = ref(db ,"ProductDetails/");
    onValue(reference, function(data){
     var productsData = data.val()
     productsData = Object.values(productsData)
     for(var i = 0; i < productsData.length; i++){
        var imgUrl = productsData[i].imgUrl
        var price = productsData[i].price
        var details = productsData[i].details
        var location = productsData[i].location
        var id = productsData[i].id
        console.log(id);

        products.innerHTML += 
        `
        <div onclick="cardClick('${id}')" class="card mt-3" style="width: 18rem;">
        <img src="${imgUrl}" class="product-img card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Rs &nbsp${price}</h5>
        <p class="card-text fs-5 text-bold">${details.slice(0,30)}...</p>
        <p class="card-text">${location}</p>
    </div>
        `
     }
    })
 }
 getData()

 window.cardClick = function(id){
    localStorage.setItem("proid", id)
    window.location.assign("../clickProduct/clickProduct.html")
 }