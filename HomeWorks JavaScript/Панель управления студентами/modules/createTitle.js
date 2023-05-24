// Заголовок
export function createTitle(text, size = 1) {
  const title = document.createElement(`h${size}`);
  title.textContent = text;
  document.body.append(title);
}
