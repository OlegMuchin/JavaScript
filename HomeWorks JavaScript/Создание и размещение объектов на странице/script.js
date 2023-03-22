function list(valueAndLabel, defValue) {
    const select = document.createElement("select")
    document.body.append(select)
    for (let index = 0; index < valueAndLabel.length; index++) {
        const option = document.createElement("option")
        option.label = valueAndLabel[index].label
        option.value = valueAndLabel[index].value
        select.append(option)
        if (valueAndLabel[index].value == defValue) {
            select.value = defValue
        }
    }
}
const array = [
    {value: "1", label: "a"},
    {value: "2", label: "b"},
    {value: "3", label: "c"},
    {value: "4", label: "d"}
]
list(array,"2")