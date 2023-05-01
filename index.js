let language = localStorage.getItem('language') || 'en';
let caps = false;

const arrayOfButtons = [
  {
    main: '`', additional: '~', mainRu: 'Ё', mainRuLower: 'ё', code: 'Backquote',
  },
  { main: '1', additional: '!', code: 'Digit1' },
  {
    main: '2', additional: '@', additionalRu: '""', code: 'Digit2',
  },
  {
    main: '3', additional: '#', additionalRu: '№', code: 'Digit3',
  },
  {
    main: '4', additional: '$', additionalRu: ';', code: 'Digit4',
  },
  { main: '5', additional: '%', code: 'Digit5' },
  {
    main: '6', additional: '^', additionalRu: ':', code: 'Digit6',
  },
  {
    main: '7', additional: '&', additionalRu: '?', code: 'Digit7',
  },
  { main: '8', additional: '*', code: 'Digit8' },
  { main: '9', additional: '(', code: 'Digit9' },
  { main: '0', additional: ')', code: 'Digit0' },
  { main: '-', additional: '_', code: 'Minus' },
  { main: '=', additional: '+', code: 'Equal' },
  {
    main: 'Backspace', altColor: true, size: 'xl', code: 'Backspace', data: 'backspace',
  },
  {
    main: 'Tab', altColor: true, size: 's', code: 'Tab', data: '  ',
  },
  {
    main: 'Q', mainLower: 'q', mainRu: 'Й', mainRuLower: 'й', code: 'KeyQ',
  },
  {
    main: 'W', mainLower: 'w', mainRu: 'Ц', mainRuLower: 'ц', code: 'KeyW',
  },
  {
    main: 'E', mainLower: 'e', mainRu: 'У', mainRuLower: 'у', code: 'KeyE',
  },
  {
    main: 'R', mainLower: 'r', mainRu: 'К', mainRuLower: 'к', code: 'KeyR',
  },
  {
    main: 'T', mainLower: 't', mainRu: 'Е', mainRuLower: 'е', code: 'KeyT',
  },
  {
    main: 'Y', mainLower: 'y', mainRu: 'Н', mainRuLower: 'н', code: 'KeyY',
  },
  {
    main: 'U', mainLower: 'u', mainRu: 'Г', mainRuLower: 'г', code: 'KeyU',
  },
  {
    main: 'I', mainLower: 'i', mainRu: 'Ш', mainRuLower: 'ш', code: 'KeyI',
  },
  {
    main: 'O', mainLower: 'o', mainRu: 'Щ', mainRuLower: 'щ', code: 'KeyO',
  },
  {
    main: 'P', mainLower: 'p', mainRu: 'З', mainRuLower: 'з', code: 'KeyP',
  },
  {
    main: '[', additional: '{', mainRu: 'Х', mainRuLower: 'х', code: 'BracketLeft',
  },
  {
    main: ']', additional: '}', mainRu: 'Ъ', mainRuLower: 'ъ', code: 'BracketRight',
  },
  {
    main: '\\', additional: '|', additionalRu: '/', code: 'Backslash',
  },
  {
    main: 'Del', altColor: true, size: 's', code: 'Delete', data: 'delete',
  },
  {
    main: 'Caps Lock', altColor: true, size: 'xl', code: 'CapsLock', data: 'caps_lock',
  },
  {
    main: 'A', mainLower: 'a', mainRu: 'Ф', mainRuLower: 'ф', code: 'KeyA',
  },
  {
    main: 'S', mainLower: 's', mainRu: 'Ы', mainRuLower: 'ы', code: 'KeyS',
  },
  {
    main: 'D', mainLower: 'd', mainRu: 'В', mainRuLower: 'в', code: 'KeyD',
  },
  {
    main: 'F', mainLower: 'f', mainRu: 'А', mainRuLower: 'а', code: 'KeyF',
  },
  {
    main: 'G', mainLower: 'g', mainRu: 'П', mainRuLower: 'п', code: 'KeyG',
  },
  {
    main: 'H', mainLower: 'h', mainRu: 'Р', mainRuLower: 'р', code: 'KeyH',
  },
  {
    main: 'J', mainLower: 'j', mainRu: 'О', mainRuLower: 'о', code: 'KeyJ',
  },
  {
    main: 'K', mainLower: 'k', mainRu: 'Л', mainRuLower: 'л', code: 'KeyK',
  },
  {
    main: 'L', mainLower: 'l', mainRu: 'Д', mainRuLower: 'д', code: 'KeyL',
  },
  {
    main: ';', additional: ':', mainRu: 'Ж', mainRuLower: 'ж', code: 'Semicolon',
  },
  {
    main: "'", additional: '"', mainRu: 'Э', mainRuLower: 'э', code: 'Quote',
  },
  {
    main: 'Enter', altColor: true, size: 'l', code: 'Enter', data: '\n',
  },
  {
    main: 'Shift', altColor: true, size: 'xxl', code: 'ShiftLeft', data: 'shift',
  },
  {
    main: 'Z', mainLower: 'q', mainRu: 'Я', mainRuLower: 'я', code: 'KeyZ',
  },
  {
    main: 'X', mainLower: 'q', mainRu: 'Ч', mainRuLower: 'ч', code: 'KeyX',
  },
  {
    main: 'C', mainLower: 'q', mainRu: 'С', mainRuLower: 'с', code: 'KeyC',
  },
  {
    main: 'V', mainLower: 'q', mainRu: 'М', mainRuLower: 'м', code: 'KeyV',
  },
  {
    main: 'B', mainLower: 'q', mainRu: 'И', mainRuLower: 'и', code: 'KeyB',
  },
  {
    main: 'N', mainLower: 'q', mainRu: 'Т', mainRuLower: 'т', code: 'KeyN',
  },
  {
    main: 'M', mainLower: 'q', mainRu: 'Ь', mainRuLower: 'ь', code: 'KeyM',
  },
  {
    main: ',', mainLower: 'q', mainRu: 'Б', mainRuLower: 'б', code: 'Comma',
  },
  {
    main: '.', mainLower: 'q', mainRu: 'Ю', mainRuLower: 'ю', code: 'Period',
  },
  {
    main: '/', mainLower: 'q', mainRu: ',', mainRuLower: '.', code: 'SlashSecond',
  },
  { main: '\u2191', altColor: true, code: 'ArrowUp' },
  {
    main: 'Shift', altColor: true, code: 'ShiftRight', data: 'shift',
  },
  {
    main: 'Ctrl', altColor: true, size: 'm', code: 'ControlLeft', data: 'ctrl',
  },
  {
    main: 'Win', altColor: true, code: 'MetaLeft', data: 'win',
  },
  {
    main: 'Alt', altColor: true, code: 'AltLeft', data: 'alt',
  },
  {
    main: '', altColor: true, size: 'space', code: 'Space', data: ' ',
  },
  {
    main: 'Alt', altColor: true, code: 'AltRight', data: 'alt',
  },
  {
    main: 'Ctrl', altColor: true, size: 'm', code: 'ControlRight', data: 'ctrl',
  },
  { main: '\u2190', altColor: true, code: 'ArrowLeft' },
  { main: '\u2193', altColor: true, code: 'ArrowDown' },
  { main: '\u2192', altColor: true, code: 'ArrowRight' },
];

function createKeyBoard() {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  return keyboard;
}

function createButton({
  main, additional, altColor, size, code, mainRu, additionalRu, data, mainLower, mainRuLower,
}) {
  const button = document.createElement('div');
  let className = 'button';
  if (altColor) {
    className += ' button--pink';
  }
  switch (size) {
    case 's':
      className += ' button--small';
      break;
    case 'm':
      className += ' button--medium';
      break;
    case 'l':
      className += ' button--large';
      break;
    case 'xl':
      className += ' button--exstra-large';
      break;
    case 'xxl':
      className += ' button--exstra-exstra-large';
      break;
    case 'space':
      className += ' button--space';
      break;
    default:
      break;
  }
  button.className = className;
  button.id = code;
  if (data) {
    button.setAttribute('data', data);
  }
  if (mainLower) {
    button.setAttribute('mainLower', mainLower);
  }
  if (mainRuLower) {
    button.setAttribute('mainRuLower', mainRuLower);
  }
  if (mainRu) {
    button.setAttribute('mainRu', mainRu);
  }
  if (main) {
    button.setAttribute('main', main);
  }
  if (additional) {
    button.setAttribute('additional', additional);
  }
  if (additionalRu) {
    button.setAttribute('additionalRu', additionalRu);
  }
  const additionalSymbol = document.createElement('div');
  additionalSymbol.textContent = (language === 'ru' && additionalRu) ? additionalRu : additional;
  additionalSymbol.className = 'button__additional';
  const mainSymbol = document.createElement('div');
  mainSymbol.textContent = (language === 'ru' && mainRu) ? mainRu : main;
  mainSymbol.className = 'button__main';
  button.append(additionalSymbol, mainSymbol);
  return button;
}

function createTextArea() {
  const textArea = document.createElement('textarea');
  textArea.className = 'textarea';
  return textArea;
}

function createHint() {
  const hint = document.createElement('div');
  hint.textContent = 'Press Shift + Alt to change language';
  hint.className = 'hint';
  return hint;
}

const body = document.getElementsByTagName('body')[0];
const textArea = createTextArea();
body.appendChild(textArea);
const keyboard = createKeyBoard();
const buttons = arrayOfButtons.map(createButton);
keyboard.append(...buttons);
body.appendChild(keyboard);
body.appendChild(createHint());

function setActiveButton(e) {
  document.getElementById(e.code)?.classList.add('button--active');
}

function removeActiveButton(e) {
  document.getElementById(e.code)?.classList.remove('button--active');
}

function changeLanguage() {
  arrayOfButtons.forEach((item, index) => {
    buttons[index].children[0].textContent = (language === 'ru' && item.additionalRu)
      ? item.additionalRu
      : item.additional;
    buttons[index].children[1].textContent = (language === 'ru' && item.mainRu)
      ? item.mainRu
      : item.main;
  });
}

document.addEventListener('keydown', (e) => {
  setActiveButton(e);
});

document.addEventListener('keyup', (e) => {
  removeActiveButton(e);
});

document.addEventListener('keyup', (e) => {
  if ((e.key === 'Shift' && e.altKey) || (e.key === ('Alt' || 'AltGraph') && e.shiftKey)) {
    language = (language === 'en') ? 'ru' : 'en';
    localStorage.setItem('language', language);
    changeLanguage();
  }
});

document.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('button')) {
    e.preventDefault();
    e.target.classList.add('button--active');
  } else if (e.target.classList.contains('button__additional')
  || e.target.classList.contains('button__main')) {
    e.preventDefault();
    e.target.parentElement.classList.add('button--active');
  }
});

document.addEventListener('mouseup', (e) => {
  if (e.target.classList.contains('button')) {
    e.target.classList.remove('button--active');
  } else if (e.target.classList.contains('button__additional')
  || e.target.classList.contains('button__main')) {
    e.target.parentElement.classList.remove('button--active');
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('button')) {
    e.target.classList.remove('button--active');
  } else if (e.target.classList.contains('button__additional') || e.target.classList.contains('button__main')) {
    e.target.parentElement.classList.remove('button--active');
  }
});

function changeText(element, event) {
  const data = element.getAttribute('data');
  const selection = textArea.selectionEnd;
  const { value } = textArea;

  if (data === 'shift' || data === 'alt' || data === 'ctrl' || data === 'win') {
    return false;
  }
  if (data === 'caps_lock') {
    caps = !caps;
  } else if (data === 'backspace') {
    textArea.value = value.slice(0, selection - 1) + value.slice(selection, value.length);
    textArea.selectionEnd = selection - 1;
  } else if (data === 'delete') {
    textArea.value = value.slice(0, selection) + value.slice(selection + 1, value.length);
    textArea.selectionEnd = selection;
  } else if (data) {
    textArea.value = value.slice(0, selection) + data + value.slice(selection, value.length);
    textArea.selectionEnd = selection + data.length;
  } else if (event.shiftKey || caps) {
    const symbol = language === 'ru'
      ? (element.getAttribute('additionalRu')
        || element.getAttribute('mainRu')
        || element.getAttribute('additional'))
      : (element.getAttribute('additional') || element.getAttribute('main'));
    textArea.value = value.slice(0, selection) + symbol + value.slice(selection, value.length);
    textArea.selectionEnd = selection + 1;
  } else {
    const symbol = language === 'ru'
      ? (element.getAttribute('mainRuLower') || element.getAttribute('main'))
      : (element.getAttribute('mainLower') || element.getAttribute('main'));
    textArea.value = value.slice(0, selection) + symbol + value.slice(selection, value.length);
    textArea.selectionEnd = selection + 1;
  }

  return true;
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    changeText(e.target, e);
  } else if (e.target.classList.contains('button__additional') || e.target.classList.contains('button__main')) {
    changeText(e.target.parentElement, e);
  }
});
