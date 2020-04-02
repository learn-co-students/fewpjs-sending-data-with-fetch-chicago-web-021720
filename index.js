// Add your code here

function submitData(userName, userEmail) {
    
    const reqData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };
    
    return fetch('http://localhost:3000/users', reqData)
             .then(resp => resp.json())
             .then(json => {
                 addPToBody(json['id']);
             })
             .catch(err => {
                addPToBody(err.message);
             });
}

function addPToBody(text) {
    const body = document.querySelector('body');
    const p = document.createElement('p')
    p.innerHTML = text;
    body.append(p);
}

