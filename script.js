const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#display");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.id;
    const value = btn.innerText;

    if (id === "c") {
      display.innerText = "";
    }
    else if (id === "back") {
      display.innerText = display.innerText.slice(0, -1);
    }
    else if (id === "equal") {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error";
      }
    }
    else {
      display.innerText += value;
    }
  });
});
