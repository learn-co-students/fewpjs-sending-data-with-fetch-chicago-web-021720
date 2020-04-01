function submitData(name, email) {
    let object = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({"name": name, "email": email})
    }
    let body = document.querySelector("body")
    return fetch("http://localhost:3000/users", object)
        .then(resp => resp.json())
        .then(function(json) {
            let id = json.id
            let p_id = document.createElement("p")
            p_id.innerHTML = id
            body.appendChild(p_id)
        })
        .catch(function(error) {
            let p_err = document.createElement("p")
            p_err.innerHTML = error
            body.appendChild(p_err)
        })
}