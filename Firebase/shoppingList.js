import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getDatabase,ref,push,onValue,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";



  const appSettings = {
    databaseURL:'https://clone-e10e3-default-rtdb.firebaseio.com/'
  }
   const app =initializeApp(appSettings)
   const database = getDatabase(app)

   const shoppingListInDB=ref(database,'shoppingList')
   let shoppingList =document.getElementById('shopping-list')

  onValue(shoppingListInDB,function(snapshot){
     if(snapshot.exists()){
      let booksArray = Object.entries(snapshot.val())
      clearBooks()
      for(let book of booksArray){
     //   let keys=Object.keys(book)
        let currentID =book[0]
        let currentItem = Object.values(book[1])
       addShopping(book)
         console.log(currentID)
         }
     }

     else{
        shoppingList.innerHTML=' No item here .... yet'
        shoppingList.style.color='white'
        shoppingList.style.textAlign='center'
     }
   
  })




  function clearBooks(){
    shoppingList.innerHTML=' '

   }

   function addShopping(item){
   //  shoppingList.innerHTML +=`<li>${name}</li>`
   // shoppingList.style.color='primary'
   let itemID = item[0]
    let value = Object.values(item[1])
   let element =document.createElement("li")
   element.textContent=value
   element.addEventListener('click',function(){
    console.log(itemID)
    const itemToRemovePath =ref(database,`shoppingList/${itemID}`) 
    remove(itemToRemovePath)
   })
   shoppingList.appendChild(element)
   }