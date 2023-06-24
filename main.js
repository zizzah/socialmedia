let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

let posts = document.getElementById("posts");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
  });
  

  let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      msg.innerHTML = "";
      acceptData();

    }
  };

// accepting input from the field
  let data = {};

/*     
The main idea is that, using the function,
 we collect data from the inputs and store
  them in our object named data. Now let's finish building our acceptData function.


*/
let acceptData = () => {
    data["text"] = input.value;
    createPost();

    console.log(data);
  };



/*In order to post our input data on the right side,
 we need to create
 a div element and append it
 to the posts div. First, let's create a function and 
 write these lines: 👇
 
 The backticks are template literals. It will work as a template for
  us. Here, we need 3 things: a parent div, the input itself, and the options
  div which carries the edit and delete icons. Let's finish our function 👇
 
 */

  let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
  };


  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };




  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };


/* let forms = document.getElementById("forms");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msgs = document.getElementById("msgs");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidations();
});

let formValidations = () => {
  if (textInput.value === "") {
    console.log("failure");
    msgs.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msgs.innerHTML = "";
  }
}; */


/* 

function generatePrimes(quota) {

  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      console.log(c+"      "+n)

      if (n % c === 0) {
          return false;
       }
    }
    return true;

  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  const primes = generatePrimes(quota);
  document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
  document.location.reload()
});
 */




const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then( response => {
  const jsonPromise = response.json();
  jsonPromise.then( json => {
    console.log(" HELOO "+json[0].name);
  });
});

const fetchPromiseS = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromiseS
  .then( response => {
    return response.json();
  })
  .then( json => {
    console.log(json[1].name);
  });

  





  const fetchPromise11 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise21 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise31 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise11, fetchPromise21, fetchPromise31])
  .then( responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
  });


  const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
  const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
  const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
  
  Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then( response => {
      console.log(`${response.url}: ${response.status}`);
    })
    .catch( error => {
      console.error(`Failed to fetch: ${error}`)
    });
  