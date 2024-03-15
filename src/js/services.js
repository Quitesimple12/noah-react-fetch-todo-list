function createList(todos) {
fetch('https://playground.4geeks.com/apis/fake/todos/user/quitesimple', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok);
        console.log(resp.status);

        return resp.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}
function deleteList() {
    fetch('https://playground.4geeks.com/apis/fake/todos/user/quitesimple', {
      method: "PUT",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok);
        console.log(resp.status);

        return resp.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}
function getList() {
    return fetch("https://playground.4geeks.com/apis/fake/todos/user/quitesimple", {
        method: "GET",
        headers: { "Content-type": "application/json" }
    })
    .then(resp => {
        if (!resp.ok) {
            throw new Error(resp.status);
        }
        return resp.json(); // Return the JSON response
    });
}
export { createList, deleteList, getList }