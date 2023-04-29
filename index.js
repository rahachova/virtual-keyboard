
const arrayOfButtons = [
  {main: '`', additional: '~', mainRu: 'Ё', code: "Backquote"},
  {main: 1, additional: '!', code: "Digit1"},
  {main: 2, additional: '@', additionalRu: '""', code: "Digit2"},
  {main: 3, additional: '#', additionalRu: '№', code: "Digit3"},
  {main: 4, additional: '$', additionalRu: ';', code: "Digit4"},
  {main: 5, additional: '%', code: "Digit5"},
  {main: 6, additional: '^', additionalRu: ':', code: "Digit6"},
  {main: 7, additional: '&', additionalRu: '?', code: "Digit7"},
  {main: 8, additional: '*', code: "Digit8"},
  {main: 9, additional: '(', code: "Digit9"},
  {main: 0, additional: ')', code: "Digit0"},
  {main: "-", additional: '_', code: "Minus"},
  {main: "=", additional: '+', code: "Equal"},
  {main: "Backspace", alternativeColor: true, size: 'xl', code: "Backspace"},
  {main: "Tab", alternativeColor: true, size: 's', code: "Tab"},
  {main: "Q", mainRu: 'Й', code: "KeyQ"},
  {main: "W", mainRu: 'Ц', code: "KeyW"},
  {main: "E", mainRu: 'У', code: "KeyE"},
  {main: "R", mainRu: 'К', code: "KeyR"},
  {main: "T", mainRu: 'Е', code: "KeyT"},
  {main: "Y", mainRu: 'Н', code: "KeyY"},
  {main: "U", mainRu: 'Г', code: "KeyU"},
  {main: "I", mainRu: 'Ш', code: "KeyI"},
  {main: "O", mainRu: 'Щ', code: "KeyO"},
  {main: "P", mainRu: 'З', code: "KeyP"},
  {main: "[", mainRu: 'Х', code: "BracketLeft"},
  {main: "]", mainRu: 'Ъ', code: "BracketRight"},
  {main: "\\", additional: '|', code: "Backslash"},
  {main: "Del", alternativeColor: true, size: 's', code: "Delete"},
  {main: "Caps Lock", alternativeColor: true, size: 'xl', code: "CapsLock"},
  {main: "A", mainRu: 'Ф', code: "KeyA"},
  {main: "S", mainRu: "Ы", code: "KeyS"},
  {main: "D", mainRu: "В", code: "KeyD"},
  {main: "F", mainRu: "А", code: "KeyF"},
  {main: "G", mainRu: "П", code: "KeyG"},
  {main: "H", mainRu: "Р", code: "KeyH"},
  {main: "J", mainRu: "О", code: "KeyJ"},
  {main: "K", mainRu: "Л", code: "KeyK"},
  {main: "L", mainRu: "Д", code: "KeyL"},
  {main: ";", mainRu: "Ж", code: "Semicolon"},
  {main: "'", mainRu: "Э", code: "Quote"},
  {main: "Enter", alternativeColor: true, size: 'l', code: "Enter"},
  {main: "Shift", alternativeColor: true, size: 'xl', code: "ShiftRight"},
  {main: "\/", code: "SlashFirst"},
  {main: "Z", mainRu: "Я", code: "KeyZ"},
  {main: "X", mainRu: "Ч", code: "KeyX"},
  {main: "C", mainRu: "С", code: "KeyC"},
  {main: "V", mainRu: "М", code: "KeyV"},
  {main: "B", mainRu: "И", code: "KeyB"},
  {main: "N", mainRu: "Т", code: "KeyN"},
  {main: "M", mainRu: "Ь", code: "KeyM"},
  {main: ",", mainRu: "Б", code: "Comma"},
  {main: ".", mainRu: "Ю", code: "Period"},
  {main: "/", mainRu: ".", code: "SlashSecond"},
  {main: "\u2191", alternativeColor: true, code: "ArrowUp"},
  {main: "Shift", alternativeColor: true, code: "ShiftRight"},
  {main: "Ctrl", alternativeColor: true, size: 'm', code: "ControlLeft"},
  {main: "Win", alternativeColor: true, code: "MetaLeft"},
  {main: "Alt", alternativeColor: true, code: "AltLeft"},
  {main: "", alternativeColor: true, size: 'space', code: "Space"},
  {main: "Alt", alternativeColor: true, code: "AltRight"},
  {main: "Ctrl", alternativeColor: true, size: 'm', code: "ControlRight"},
  {main: "\u2190", alternativeColor: true, code: "ArrowLeft"},
  {main: "\u2193", alternativeColor: true, code: "ArrowDown"},
  {main: "\u2192", alternativeColor: true, code: "ArrowRight"},
]

function createKeyBoard() {
  const keyboard = document.createElement('div')
  keyboard.className = 'keyboard'
  return keyboard
}

function createButton({main, additional, alternativeColor, size, code}) {
  const button = document.createElement('div')
  let className = 'button'
  if(alternativeColor) {
    className += ' button--pink'
  }
  switch (size) {
    case 's':
      className += ' button--small'
      break;
    case 'm':
      className += ' button--medium'
      break;
    case 'l':
      className += ' button--large'
      break;
    case 'xl':
      className += ' button--exstra-large'
      break;
    case 'space':
      className += ' button--space'
      break;
    default:
      break;
  }
  button.className = className
  button.id = code
  const additionalSymbol = document.createElement('div')
  additionalSymbol.textContent = additional
  additionalSymbol.className = 'button__additional'
  const mainSymbol = document.createElement('div')
  mainSymbol.textContent = main
  mainSymbol.className = 'button__main'
  button.append(additionalSymbol, mainSymbol)
  return button
}

function createTextArea() {
  const textArea = document.createElement('textarea')
  textArea.className = 'textarea'
  return textArea
}

const body = document.getElementsByTagName('body')[0]
body.appendChild(createTextArea())
const keyboard = createKeyBoard()
const buttons = arrayOfButtons.map(createButton)
keyboard.append(...buttons)
// keyboard.addEventListener()
body.appendChild(keyboard)

document.addEventListener('keypress', (e) => {
  setActiveButton(e)
})

document.addEventListener('keyup', (e) => {
  removeActiveButton(e)
})

function setActiveButton(e) {
  document.getElementById(e.code).classList.add('button--active')
}

function removeActiveButton(e) {
  document.getElementById(e.code).classList.remove('button--active')
}