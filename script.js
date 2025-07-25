const form = document.querySelector("#calc-form");

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const tip = (Number(data.amount) * Number(data.percentage)) / 100;

  document.querySelector(".summary").textContent = `Total: $${tip}`;
}

form.addEventListener("submit", handleSubmit);
