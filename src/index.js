import './style.scss';
import logo from './assets/images/logo-webpack.png';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Webpack Starter - Le fichier JS fonctionne !');
  console.log('Hello Webpack!');
  console.log('Webpack avec SCSS 🚀');
});

const img = document.createElement('img');
img.src = logo;
img.alt = 'logo webpack';
document.body.appendChild(img);
