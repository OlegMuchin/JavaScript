export function PUT(id) {
    fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
        id: 1,
        name: "name",
        owner: "owner",
        done: false,
        }),
    })
        .then((response) => response.json())
        .then((date) => console.log(date));
}
