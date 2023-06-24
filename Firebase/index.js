import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getDatabase,ref,push,onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";



  const appSettings = {
    databaseURL:'https://clone-e10e3-default-rtdb.firebaseio.com/'
  }
   const app =initializeApp(appSettings)
   const database = getDatabase(app)

   const shoppingListInDB=ref(database,'Books')

   
  /* onValue(shoppingListInDB,function(snapshot){
    let booksArray = Object.keys(snapshot.val())
    clearBooks()
    for(let book of booksArray){
     console.log(book);
     addShopping(book)
    }
  }) */

   let button =document.getElementById('add-button')
   let input =document.getElementById('moveName')
   let shoppingList =document.getElementById('shopping-list')
   /// implementation of click event on add button
   button.addEventListener('click',function(){
    let name = input.value
    push(shoppingListInDB,name)
    addShopping(name)
    clearInputField()
    console.log(name)


   })

   function clearInputField(){
    input.value=''

   }
  
   function addShopping(name){
    shoppingList.innerHTML +=`<li>${name}</li>`
    shoppingList.style.color='primary'
   }