export default function contactComponent() {
  const element = document.createElement('div');

  const test = document.createElement('p');
  test.textContent = 'Contact content here';

  element.append(test);
  return element;
}
