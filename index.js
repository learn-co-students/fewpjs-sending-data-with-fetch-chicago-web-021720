// Add your code here

function submitData(name, email) {

    let formData = {
        name: name,
        email: email
    };
    
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    return fetch('http://localhost:3000/users', configObj)
        .then(function(response) {
            return response.json();
        }).then(function(object) {
            const objNode = document.createElement('p');
            objNode.innerHTML = `${object.id}`;
            document.body.appendChild(objNode);
        }).catch(function(error) {
            const objNode = document.createElement('p');
            objNode.innerHTML = `${error.message}`;
            document.body.appendChild(objNode);
        });
}
