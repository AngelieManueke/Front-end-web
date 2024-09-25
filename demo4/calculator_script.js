// Function to clear the calculator screen
function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  // Function to display values on the screen
  function display(value) {
    document.getElementById("result").value += value;
  }
  
  // Function to calculate the result
  function calculate() {
    try {
      // Get the expression from the input field
      const expression = document.getElementById("result").value;
  
      // Evaluate the expression using a safer method
      const result = new Function(return ${expression})();
  
      // Display the result
      document.getElementById("result").value = result;
    } catch (error) {
      // Handle errors (e.g., invalid expressions)
      document.getElementById("result").value = "Error";
    }
  }