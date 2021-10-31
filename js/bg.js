const winH = window.innerHeight;
const wrapper = document.querySelector('#wrapper');
const imgs = ["bg01.jpg","bg02.jpg","bg03.jpg","bg04.jpg","bg05.jpg"];
const randomImg = imgs[Math.floor(Math.random()*imgs.length)];
const bgImgs = document.createElement('img');
bgImgs.src = `img/${randomImg}`;

wrapper.appendChild(bgImgs);

bgImgs.style.height = `${winH}px`;
