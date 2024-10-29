
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const value = event.target.getAttribute("data-value");
  
        
        if (event.target.id === "clear") {
          currentInput = "";
          display.value = "";
        }
        
        else if (event.target.id === "equals") {
          
          if (currentInput) {
            try {
              currentInput = eval(currentInput).toString(); 
              display.value = currentInput;
            } catch {
              display.value = "Error"; 
              currentInput = ""; 
            }
          }
        }
        
        else {
          currentInput += value;
          display.value = currentInput;
        }
      });
    });
  });
  
