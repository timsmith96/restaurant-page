export default function createHeader() {
  const headerDiv = document.querySelector('.header');

  // HEADER
  const h1 = document.createElement('h1');
  h1.textContent = "Beansy's Breakfast Bar";
  headerDiv.appendChild(h1);

  // LINKS CONTAINER
  const linksContainer = document.createElement('div');
  linksContainer.classList.add('links-container');
  const homeTab = document.createElement('a');
  homeTab.classList.add('homeBtn');
  homeTab.textContent = 'Home';

  const menuTab = document.createElement('a');
  menuTab.textContent = 'Menu';
  menuTab.classList.add('menuBtn');
  const contactTab = document.createElement('a');
  contactTab.textContent = 'Contact';
  contactTab.classList.add('contactBtn');
  linksContainer.appendChild(homeTab);
  linksContainer.appendChild(menuTab);
  linksContainer.appendChild(contactTab);

  headerDiv.appendChild(linksContainer);
}
