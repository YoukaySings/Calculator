const display = document.getElementById('display');

    // Append symbol to the display
    function appendSymbol(symbol) {
      display.value += symbol;
    }

    // Clear the display
    function clearDisplay() {
      display.value = '';
    }

    // Delete the last character
    function deleteLast() {
      display.value = display.value.slice(0, -1);
    }

    // Calculate the result
    function calculate() {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = 'Error';
      }
    }