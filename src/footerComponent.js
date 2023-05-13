export default function footerComponent() {
  const footer = document.createElement('footer');
  footer.className = 'footer-container';
  const footerDetails = document.createElement('p');
  footerDetails.textContent = 'Created by debo9210';
  footer.appendChild(footerDetails);

  return footer;
}
