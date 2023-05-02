export function repeat(main) {
  let re = document.createElement("button");
  re.className = "re";
  re.textContent = "Ещё раз";
  main.append(re);
  re.addEventListener("click", () => {
    window.location.reload();
  });
  return re;
}