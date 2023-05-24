export function GETID(id) {
    fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "GET",
    }).then((response) => response.json())
        .then((date) => console.log(date));
}
