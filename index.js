document.addEventListener("DOMContentLoaded", function () {
  const operator = document.querySelectorAll(".operator");
  const decimal = document.querySelector(".decimal");
  const result = document.querySelector(".result");
  const number = document.querySelectorAll(".number");
  const clear = document.querySelector(".clear");

  number.forEach((numbers) => {
    numbers.addEventListener("click", (e) => {
      result.value += e.target.value;
    });
  });

  operator.forEach((oper) => {
    oper.addEventListener("click", (e) => {
      if (e.target.value === "=") {
        try {
          result.value = eval(result.value);
        } catch (error) {
          result.value = "Error";
        }
      } else {
        result.value += e.target.value;
      }
    });
  });

  clear.addEventListener("click", () => {
    result.value = "";
  });

  decimal.addEventListener("click", () => {
    if (!result.value.includes(".")) {
      result.value += decimal.value;
    }
  });
});
