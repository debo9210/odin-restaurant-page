import Image from '../images/chicken-barbecue.jpg';

export default function component() {
  const element = document.createElement('div');
  element.className = 'container';

  const main = document.createElement('main');
  main.className = 'main-container';

  const mainHeading = document.createElement('div');
  mainHeading.className = 'main-heading';
  const title = document.createElement('h1');
  title.textContent = 'Laquitos';
  const subTitle = document.createElement('h4');
  subTitle.textContent = 'Lorem Ipsum';
  const restaurentDetails = document.createElement('p');
  restaurentDetails.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  mainHeading.append(title, subTitle, restaurentDetails);

  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';
  const image = document.createElement('img');
  image.src = Image;
  image.alt = 'food-image';
  imageContainer.append(image);

  main.append(mainHeading, imageContainer);

  // const footer = document.createElement('footer');
  // footer.className = 'footer-container';
  // const footerDetails = document.createElement('p');
  // footerDetails.textContent = 'Created by debo9210';
  // footer.appendChild(footerDetails);

  element.append(main);

  return element;
}
