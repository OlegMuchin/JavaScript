export function createLineAndColumn(defValue, dom) {
  const lineAndColumn = [
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];
  const select = document.createElement("select");
  select.className = "net";
  dom.append(select);
  for (let index = 0; index < lineAndColumn.length; index++) {
    const option = document.createElement("option");
    option.label = lineAndColumn[index].label;
    option.value = lineAndColumn[index].value;
    select.append(option);
    if (lineAndColumn[index].value == defValue) {
      select.value = defValue;
    }
  }
  return select;
}
