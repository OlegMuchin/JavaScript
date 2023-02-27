const roadMines = [
  false,
  true,
  false,
  false,
  false,
  false,
  true,
  false,
  false,
  false,
];
let hpTanck = 2;
for (let index = 0; index < roadMines.length; index++) {
  if (hpTanck === 0) {
    break;
  } else if (roadMines[index]) {
    hpTanck = hpTanck - 1;
  }
  if (!roadMines[index]) {
    console.log(`Танк переместился на ${index + 1}`);
  } else if (hpTanck === 1 && roadMines[index]) {
    console.log("Танк повреждён");
  } else {
    console.log("Танк уничтожен");
  }
}
