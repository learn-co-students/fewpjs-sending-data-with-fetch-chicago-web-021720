// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// let configObj = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

function submitData(nameArg, emailArg) {
    // fetch("http://localhost:3000/dogs", configObj)
    // .then(function(response) {
    //     return response.json();
    // })
    // .then(function(object) {
    //     console.log(object);
    // })

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: `${nameArg}`,
            email: `${emailArg}`
        })
    })
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        let body = document.querySelector("body");
        let para = document.createElement("p");
        para.innerHTML = object.id;
        body.append(para)
        console.log(object)
        
    })
    .catch(function(error) {
        let body = document.querySelector("body");
        let para = document.createElement("p");
        para.innerHTML = error.message;
        body.append(para)
        // console.log(object)
        // alert("Bad things! Ragnarők!");
        // console.log(error.message);
    });
}


