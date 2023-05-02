export function shuffle(ar) {
  for (let i = 0; i < ar.length; i++) {
    for (let index = 0; index < ar[i].length; index++) {
      let j = Math.floor(Math.random() * (i + 1));
      let x = Math.floor(Math.random() * (index + 1));
      [ar[i][index], ar[j][x]] = [ar[j][x], ar[i][index]];
    }
  }
  let array = [];
  for (let i = 0; i < ar.length; i++) {
    let line = [];
    for (let index = 0; index < ar[i].length; index++) {
      let obj = { numberCart: ar[i][index], roll: false };
      line.push(obj);
    }
    array.push(line);
  }
  return array;
}
