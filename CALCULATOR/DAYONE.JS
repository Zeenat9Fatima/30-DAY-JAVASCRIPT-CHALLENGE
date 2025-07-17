
  const display = document.getElementById('display');
  let currentInput = '';

  function appendValue(val) {
    if (display.innerText === '0' && val !== '.') {
      currentInput = val;
    } else {
      currentInput += val;
    }
    display.innerText = currentInput;
  }

  function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
  }

  function toggleSign() {
    if (currentInput) {
      currentInput = String(eval(currentInput) * -1);
      display.innerText = currentInput;
    }
  }

  function calculate() {
    try {
      currentInput = String(eval(currentInput));
      display.innerText = currentInput;
    } catch {
      display.innerText = 'Error';
      currentInput = '';
    }
  }
