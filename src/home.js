export default function createHomePage() {
  const contentDiv = document.querySelector('#content');
  const home = document.createElement('div');
  home.classList.add('container');

  // TEXT
  const text = document.createElement('h2');
  text.textContent = 'Best vegetables in the world since 2020...';
  home.appendChild(text);

  // IMAGE
  const img = document.createElement('img');
  img.src = './img/beans.png';
  home.appendChild(img);

  // MORE TEXT
  const text2 = document.createElement('h2');
  text2.textContent = 'BEANSY BABY';
  text2.classList.add('letter-spacing');
  home.appendChild(text2);

  contentDiv.appendChild(home);
}
