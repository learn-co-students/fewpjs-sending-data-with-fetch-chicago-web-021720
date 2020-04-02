// Add your code here
function bigWetAss(){
    console.log('big wet ass')
}

bigWetAss()

function submitData(inputName, inputEmail){
    bigWetAss()
    let formData = {
        name: inputName,
        email: inputEmail
    };
       
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
        addObjectToBody(object);
    })
    .catch(function(error) {
      alert("Unauthorized Access");
      addErrorToBody(error.message);
    });
};


function addObjectToBody(objectArg){
    console.log(objectArg)
    let body = document.querySelector('body')
    body.innerHTML += `${objectArg.id}`
};

function addErrorToBody(errorMessage){
    let body = document.querySelector('body')
    body.innerHTML += `${errorMessage}`
}



submitData("Jason", "jason@jason.com")
   



// Test 3 - Handle Errors
// For this final test, after the two then() calls on your fetch() request, add a catch().

// When writing the callback function for your catch(), expect to receive an object on error with a 
// property, message, containing info about what went wrong. Append this message to the DOM when catch() 
// is called.


// Test 4 - Return the Fetch Chain
// An amazing feature of fetch() is that if you return it, other functions can tack-on their own then() 
// and catch() calls. While we won't explore this amazing idea in this lesson, let's learn good habits 
// and be sure to return the fetch() chain from our submitData function.

