// Преобразование в запись
export function changeObj(obj = {}) {
  let { name, surname, patronymic, birth, ageStartEducation, faculty } = obj;
  let [year, mount, day] = birth.split("-");
  let birthAge = age(new Date(year, mount, day));
  let { studentAge } = age(new Date(ageStartEducation, 0, 1));
  let newObj = {
    fullName: `${surname} ${name} ${patronymic}`,
    faculty: faculty,
    birthDateAndAge: `${birthAge.dateRu} (${birthAge.studentAge} лет)`,
    StartEducationAndWell: `${ageStartEducation}-${
      Number(ageStartEducation) + 4
    } (${course(studentAge + 1)})`,
  };
  return newObj;
}
// Вычисление лет
function age(date) {
  let dateRu = date.toLocaleString("ru").slice(0, 10);
  let studentAge = Math.floor(
    (Date.now() - date) / (1000 * 60 * 60 * 24 * 30 * 12)
  );
  return { dateRu, studentAge };
}
// Вычисление курса
function course(num) {
  if (num > 4) {
    return "закончил(а)";
  } else {
    return `${num} курс`;
  }
}
