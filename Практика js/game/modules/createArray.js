export function createArray(column, line) {
  let ar = [];
  let index = 0;
  for (let i = 0; i < column; i++) {
    let line1 = [];
    for (let j = 0; j < line; j++) {
      if (index < (column * line) / 2) {
        line1.push(index + 1);
        index++;
      } else {
        index = 0;
        j--;
      }
    }
    ar.push(line1);
  }
  return ar;
}
