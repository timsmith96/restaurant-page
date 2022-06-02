import _ from 'lodash';
import createContactPage from './contact';
import createHeader from './header';
import createHomePage from './home';
import createMenuPage from './menu';

createHeader();
createHomePage();

const menuBtn = document.querySelector('.menuBtn');
const homeBtn = document.querySelector('.homeBtn');
const contactBtn = document.querySelector('.contactBtn');
const contentDiv = document.querySelector('#content');

menuBtn.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  createMenuPage();
});

homeBtn.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  createHomePage();
});

contactBtn.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  createContactPage();
});
