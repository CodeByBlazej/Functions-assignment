function sayHello(name) {
  console.log('Hi ' + name);
}

let name = 'Blazej';
let greet = 'Hi ';
let DEFAULT_USER_CHOICE = 'HELLO';

const sayHi = name => {
  console.log('Hi ' + name);
};


const sayHey = (greet, name) => 
console.log(greet + name);

const sayYo = () => {
  const yo = 'Hi ';
  const nigga = 'Blazej';
  console.log(yo + nigga);
}

const sayHello4 = name => 'Hi ' + name;

const sayHello5 = (name, greeting = 'Hi ') => console.log(greeting + name);

const sayGoodMorning = () => {
  const selection = prompt(
    `${DEFAULT_USER_CHOICE} , or type whatever.`,
  ).toUpperCase();
  if (selection !== DEFAULT_USER_CHOICE) {
    alert(`Invalid value choice! We chose ${DEFAULT_USER_CHOICE}  for you!`);
    console.log(DEFAULT_USER_CHOICE + name);
    return;
  } else
  return alert('you were right! HELLO!');
};

sayHi('Blazej');
sayHey(greet, name);
sayYo();
console.log(sayHello4('Blazej'));
sayHello5('Blazej');
sayHello5('Blazej', 'Hello ');
sayGoodMorning();


function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(() => {
  console.log('All not empty!');
}, 'Hello!', '12', '1342', 'blabla');