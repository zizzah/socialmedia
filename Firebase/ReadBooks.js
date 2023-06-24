import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getDatabase,ref,push,onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";



  const appSettings = {
    databaseURL:'https://clone-e10e3-default-rtdb.firebaseio.com/'
  }
   const app =initializeApp(appSettings)
   const database = getDatabase(app)

   const shoppingListInDB=ref(database,'Books')
   let shoppingList =document.getElementById('shopping-list')

  onValue(shoppingListInDB,function(snapshot){
    let booksArray = Object.keys(snapshot.val())
    clearBooks()
    for(let book of booksArray){
     console.log(book);
     addShopping(book)
    }
  })




  function clearBooks(){
    shoppingList.innerHTML=' '

   }

   function addShopping(name){
    shoppingList.innerHTML +=`<li>${name}</li>`
    shoppingList.style.color='primary'
   }