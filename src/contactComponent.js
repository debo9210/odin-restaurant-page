import '../css/contactStyle.css';

export default function contactComponent() {
  const element = document.createElement('div');
  element.className = 'contactContainer';

  const addressContainer = document.createElement('div');
  addressContainer.className = 'addressContainer';
  const addressTitle = document.createElement('h4');
  addressTitle.textContent = 'Address';
  const address = document.createElement('p');
  address.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ';
  addressContainer.append(addressTitle, address);

  const emailContainer = document.createElement('div');
  emailContainer.className = 'emailContainer';
  const emailTitle = document.createElement('h4');
  emailTitle.textContent = 'Email';
  const email = document.createElement('p');
  email.textContent = 'Lorem@ipsum.com';
  emailContainer.append(emailTitle, email);

  const phoneContainer = document.createElement('div');
  phoneContainer.className = 'phoneContainer';
  const phoneTitle = document.createElement('h4');
  phoneTitle.textContent = 'Phone';
  const phone = document.createElement('p');
  phone.textContent = '123-456-7890';
  phoneContainer.append(phoneTitle, phone);

  element.append(addressContainer, emailContainer, phoneContainer);
  return element;
}
