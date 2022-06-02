function createIcon(imgSrc, name) {
  const item = document.createElement('div');
  const caption = document.createElement('p');
  caption.textContent = name;
  const img = document.createElement('img');
  img.src = imgSrc;
  item.appendChild(img);
  item.appendChild(caption);
  return item;
}

export default function createMenuPage() {
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  h1.classList.add('menu-heading');
  const contentDiv = document.querySelector('#content');
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const spinach = createIcon('./img/spinach.png', 'Spinach - £2.99');
  const lettuce = createIcon('./img/lettuce.png', 'Lettuce (romaine) - £1.49');
  const pepper = createIcon('./img/pepper.png', 'Pepper - £1.01');
  const cucumber = createIcon('./img/cucumber.png', 'Cucumber - £1.19');
  const celery = createIcon('./img/celery.png', 'Celery - £0.29');
  const kale = createIcon('./img/kale.png', 'Kale - £0.99');

  menu.appendChild(spinach);
  menu.appendChild(lettuce);
  menu.appendChild(pepper);
  menu.appendChild(cucumber);
  menu.appendChild(celery);
  menu.appendChild(kale);

  contentDiv.appendChild(h1);
  contentDiv.appendChild(menu);
}
