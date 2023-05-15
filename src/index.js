import MainComponent from './mainComponent';
import NavComponent from './navComponent';
import MenuComponent from './menuComponent';
import AboutComponent from './aboutComponent';
import ContactComponent from './contactComponent';
import FooterComponent from './footerComponent';
import '../css/genStyle.css';

let component = MainComponent();
const contentEntry = document.querySelector('#content');

contentEntry.append(NavComponent(), component, FooterComponent());

const menu = document.querySelector('.menu');
const brand = document.querySelector('.brand');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

brand.addEventListener('click', () => {
  contentEntry.removeChild(contentEntry.childNodes[1]);
  // contentEntry.append(component);
  contentEntry.insertBefore(component, contentEntry.lastElementChild);
});

menu.addEventListener('click', () => {
  contentEntry.removeChild(contentEntry.childNodes[1]);
  contentEntry.insertBefore(MenuComponent(), contentEntry.lastElementChild);
  // contentEntry.append(MenuComponent());
});

about.addEventListener('click', () => {
  contentEntry.removeChild(contentEntry.childNodes[1]);
  contentEntry.insertBefore(AboutComponent(), contentEntry.lastElementChild);
  // contentEntry.append(AboutComponent());
});

contact.addEventListener('click', () => {
  contentEntry.removeChild(contentEntry.childNodes[1]);
  contentEntry.insertBefore(ContactComponent(), contentEntry.lastElementChild);
  // contentEntry.append(ContactComponent());
});
