// document.addEventListener("DOMContentLoaded", function () {
//     const display = document.getElementById("display");
//     const buttons = document.querySelectorAll(".btn");
//     let currentInput = "";
  
//     buttons.forEach((button) => {
//       button.addEventListener("click", (event) => {
//         const value = event.target.getAttribute("data-value");
  
//         // Clear display
//         if (event.target.id === "clear") {
//           currentInput = "";
//           display.value = "";
//         }
//         // Calculate result
//         else if (event.target.id === "equals") {
//           try {
//             currentInput = eval(currentInput); // Calculate the result
//             display.value = currentInput;
//           } catch {
//             display.value = "Error";
//           }
//         }
//         // Add value to input
//         else {
//           currentInput += value;
//           display.value = currentInput;
//         }
//       });
//     });
//   });
  


document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const value = event.target.getAttribute("data-value");
  
        // Clear display
        if (event.target.id === "clear") {
          currentInput = "";
          display.value = "";
        }
        // Calculate result
        else if (event.target.id === "equals") {
          // Only evaluate if there's something to evaluate
          if (currentInput) {
            try {
              currentInput = eval(currentInput).toString(); // Calculate and store the result as a string
              display.value = currentInput;
            } catch {
              display.value = "Error"; // Display error for invalid expressions
              currentInput = ""; // Reset current input on error
            }
          }
        }
        // Add value to input
        else {
          currentInput += value;
          display.value = currentInput;
        }
      });
    });
  });
  