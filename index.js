const board = document.querySelector('#board');
const colors = [
  'orange',
  'purple',
  'blue',
  'teal',
  'tomato',
  'pink',
  'aqua',
  'crimson',
  'darkblue',
  'stateblue',
  'blueviolet',
  'sienna',
  'seagreen',
];
const SQUARES_NUMBER = 456;

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor); // красит квадратики по наведению мышки
  // (*) square.addEventListener('mouseover', ()=>setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square)); //сбрасывает цвет квадратиков

  square.addEventListener('dblclick', () => changeColor(square)); // красит элемент в другой цвет по двойному клику

  board.append(square);
}

// стилизирует элементы

// альтернатива функции ниже при использовании записи (*) function setColor(el) {
//   const color = getRandomColor();

//   el.style.backgroundColor = color;
//   el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }

function setColor(e) {
  const el = e.target;
  const color = getRandomColor();

  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// возвращает стили по умолчанию
const removeColor = function (el) {
  el.style.backgroundColor = 'rgb(144, 144, 144)';
  el.style.boxShadow = '0 0 2px #000';
};

function changeColor(el) {
  el.style.backgroundColor = 'yellow';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];

  //   const index = Math.floor(Math.random() * colors.length); //генерит рандомный индекс (рандомное число умножает на длину массива, затем округляется)
  //   return colors[index];
}
