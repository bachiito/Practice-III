const form = document.querySelector("#contact-me-form");
const inputs = document.querySelectorAll("input, textarea");
const modalMsg = document.querySelector(".modal__msg");
const modal = document.querySelector("#modal");

form.addEventListener("submit", e => {
  inputs.forEach(input => {
    if (!input.value) {
      e.preventDefault();

      modalMsg.textContent = "Asegúrese de llenar todos los campos";
      modal.showModal();
    }
  });
});
