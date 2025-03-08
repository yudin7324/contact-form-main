document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const popup = document.querySelector(".popup");

  function initTextFields() {
    const fields = form.querySelectorAll(".field");

    fields.forEach((field) => {
      const input = field.querySelector(".field__input");
  
      input.addEventListener("invalid", function () {
        input.classList.add("field__input--error");
      });
  
      input.addEventListener("input", function () {
        if(input.validity.valid) {
          input.classList.remove("field__input--error");
        } else {
          input.classList.add("field__input--error");
        }
      });
    });
  }

  function initRadioBtns() {
    const radioGroup = document.querySelectorAll('input[name="type"]');
    const radioError = document.querySelector(".field-radio-group .error");

    radioGroup.forEach((radio) => {
      radio.addEventListener("invalid", function () {
        radioError.style.display = "block";
      });

      radio.addEventListener("change", function () {
        radioError.style.display = "none";
      });
    });
  }

  function initCheckbox() {
    const checkbox = form.querySelector(".checkbox");
    const input = checkbox.querySelector(".checkbox__input");
    const error = checkbox.querySelector(".error");

    input.addEventListener("invalid", function () {
      error.style.display = "block";
    });

    input.addEventListener("change", function () {
      if(input.checked) {
        error.style.display = "none";
      } else {
        error.style.display = "block";
      }
    });
  }

  initTextFields();
  initRadioBtns();
  initCheckbox();

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      return;
    }

    const formData = {};

    Array.from(form.elements).forEach(element => {
      if (element.name) {
        if (element.type === "radio" && element.checked) {
          formData[element.name] = element.value;
        } else {
          formData[element.name] = element.value;
        }
      }
    });

    console.log(formData);

    popup.classList.add("active");
    setTimeout(() => popup.classList.remove("active"), 3000);
    form.reset();
  });
});
