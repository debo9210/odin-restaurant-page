export default function aboutComponent() {
  const element = document.createElement('div');

  const test = document.createElement('p');
  test.textContent = 'About content here';

  element.append(test);
  return element;
}
