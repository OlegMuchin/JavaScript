export function createInputs() {
  let name = createInput();
  name.type = "text";
  name.id = "name";
  let surname = createInput();
  surname.type = "text";
  surname.id = "surname";
  let patronymic = createInput();
  patronymic.type = "text";
  patronymic.id = "patronymic";
  let birth = createInput();
  birth.type = "date";
  birth.id = "birth";
  birth.min = "1900-01-01";
  birth.max = "2023-04-25";
  let ageStartEducation = createInput();
  ageStartEducation.type = "number";
  ageStartEducation.id = "ageStartEducation";
  ageStartEducation.min = "2000";
  ageStartEducation.max = "2023";
  let faculty = createInput();
  faculty.type = "text";
  faculty.id = "faculty";
  const input = {
    name,
    surname,
    patronymic,
    birth,
    ageStartEducation,
    faculty,
  };
  return input;
}
function createInput() {
  let input = document.createElement("input");
  input.className = "input";
  return input;
}
