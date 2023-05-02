import { repeat } from "./repeat.js";
export function createTime(stopwatch, container, main, timerId = null) {
  function startTime() {
    clearInterval(timerId);
    timerId = setInterval(interval, 1000);
    return timerId;
  }
  function interval() {
    stopwatch.innerHTML -= 1;
    if (stopwatch.innerHTML <= 0) {
      clearInterval(timerId);
      container.remove();
      setTimeout(() => {
        alert("Вы проиграли"), repeat(main);
      }, 1000);
    }
  }
  let stop = startTime();
  return stop;
}
