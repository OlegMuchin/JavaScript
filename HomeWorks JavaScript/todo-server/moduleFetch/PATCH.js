export function PATCH (id){
    fetch(`http://localhost:3000/api/todos/${id}`,{
        method: "PATCH",
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
        done: true,
        }),
    }).then((response) => response.json())
    .then((date) => console.log(date));
}
