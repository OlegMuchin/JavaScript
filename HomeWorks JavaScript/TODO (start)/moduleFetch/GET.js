export function GET() {
     return fetch("http://localhost:3000/api/todos").then((response) => response.json())
}
