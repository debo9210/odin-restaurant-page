export default function navComponent() {
  const nav = document.createElement('nav');
  nav.className = 'nav-container';

  const brand = document.createElement('div');
  brand.className = 'brand';
  brand.append('Laquitos');

  const linkContainer = document.createElement('div');
  linkContainer.className = 'link-container';

  const menu = document.createElement('p');
  menu.className = 'menu';
  menu.textContent = 'Menu';
  const about = document.createElement('p');
  about.textContent = 'About';
  about.className = 'about';
  const contact = document.createElement('p');
  contact.textContent = 'Contact';
  contact.className = 'contact';
  linkContainer.append(menu, about, contact);

  nav.append(brand, linkContainer);
  return nav;
}
