const display = document.getElementById('display');

function appendValue(val) {
  if (display.innerText === '0' && val !== '.') {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearScreen() {
  display.innerText = '0';
}

function calculate() {
  try {
    // Evaluating the expression safely
    let result = eval(display.innerText.replace('&times;', '*').replace('&divide;', '/'));
    display.innerText = result;
  } catch (error) {
    display.innerText = 'Error';
    setTimeout(clearScreen, 1500);
  }
}

// Bonus: Keyboard Support
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || key === '.') {
    appendValue(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendValue(key);
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Escape' || key === 'c' || key === 'C') {
    clearScreen();
  }
});