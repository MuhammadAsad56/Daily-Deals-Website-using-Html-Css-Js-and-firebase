  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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

 var imgUrl = document.getElementById("imgUrl")
 var price = document.getElementById("price")
 var details = document.getElementById("details")
 var description = document.getElementById("description")
 var location = document.getElementById("location")
 var number = document.getElementById("number")

 window.addProduct = function(){
    if(imgUrl.value && price.value && details.value && description.value && location.value && number.value){
        var obj = {
            imgUrl: imgUrl.value,
            price: price.value,
            details: details.value,
            description: description.value,
            location: location.value,
            number: number.value
        }
        obj.id = push(ref(db, "ProductDetails")).key;
        var reference = ref(db, `ProductDetails/${obj.id}`)
        set(reference, obj)
        .then(function(res){
            window.location.assign("../products/products.html")
        })
    }
    else{
        alert("please enter all data")
    }
 }