const n = -3,
  m = -10,
  count = 42;
let num = [];
for (let index = 0; index < count; index++) {
  num.push(
    Math.floor(
      Math.random() * (Math.max(n, m) - Math.min(n, m)) + Math.min(n, m)
    )
  );
}
// while (count > num.length) {
//   num.push(
//     Math.floor(
//       Math.random() * (Math.max(n, m) - Math.min(n, m)) + Math.min(n, m)
//     )
//   );
// }
console.log(num);
