import '../css/footerStyle.css';

const date = new Date();

export default function footerComponent() {
  const footer = document.createElement('footer');
  footer.className = 'footer-container';
  const footerDetails = document.createElement('p');
  footerDetails.innerHTML = `Created by debo9210 &#169; ${date.getFullYear()}`;
  footer.appendChild(footerDetails);

  return footer;
}
