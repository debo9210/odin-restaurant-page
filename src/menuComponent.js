export default function menuComponent() {
  const element = document.createElement('div');

  const test = document.createElement('p');
  test.textContent = 'Menu content here';

  element.append(test);
  return element;
}
