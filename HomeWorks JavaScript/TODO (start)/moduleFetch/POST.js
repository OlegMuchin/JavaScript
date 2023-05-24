export function POST(obj = {}) {
    return fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(obj),
    })
        .then((response) => response.json())
}
