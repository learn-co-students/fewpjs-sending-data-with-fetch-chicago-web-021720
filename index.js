// Add your code here
const header = {
  "Content-Type":"application/json",
  "Accept":"application/json"
};
const remoteURL = 'http://localhost:3000/users';
const submitData = (name,email) =>
  fetch(remoteURL, {
    method: "POST",
    headers: header,
    body: JSON.stringify({name,email})
  })
  .then(response => response.json())
  .then(object => document.querySelector('body').innerHTML = object.id)
  .catch(error => document.querySelector('body').innerHTML = error.message);
