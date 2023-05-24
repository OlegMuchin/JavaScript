export function DELETE(id) {
    fetch(`http://localhost:3000/api/todos/${id}`,{
    method: "DELETE",
    }).then(response => response.json())
    .then(date => console.log(date))
}
