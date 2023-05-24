export function GET() {
    fetch("http://localhost:3000/api/todos", {
        method: "GET",
    }).then((response) => response.json())
        .then((date) => console.log(date));
}