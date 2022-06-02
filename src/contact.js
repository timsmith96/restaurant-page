export default function createContactPage() {
  const contentDiv = document.querySelector('#content');
  const h1 = document.createElement('h1');
  h1.textContent = 'Contact';
  h1.classList.add('contact-heading');

  const map = document.createElement('div');
  map.classList.add('map');

  const text = document.createElement('p');
  text.textContent = 'BEANSY BABY';
  text.classList.add('letter-spacing');
  text.classList.add('contact-text');

  contentDiv.appendChild(h1);
  contentDiv.appendChild(map);
  contentDiv.appendChild(text);
}
