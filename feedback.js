const form = document.getElementById("feedbackForm");
const status = document.getElementById("status");
const btn = document.getElementById("submitBtn");
const loader = document.querySelector(".loader");
const btnText = document.querySelector(".btn-text");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyXdbyCl1li-I3tmsbaui_-BYPXLYlEiZVrjf5zX2JaSjTgG_mkUrH8_tZiuANV2ghT/exec";

form.addEventListener("submit", e => {
  e.preventDefault();
  const rating = document.querySelector("input[name='rating']:checked");
  if (!rating) {
    status.style.color = "red";
    status.innerText = "Please select a rating";
    return;
  }
  btnText.style.display = "none";
  loader.style.display = "block";
  fetch(SCRIPT_URL, {
    method: "POST",
    body: new URLSearchParams({
      name: nameInput.value || "Anonymous",
      email: emailInput.value || "Not Provided",
      rating: rating.value,
      message: message.value
    })
  })
  .then(() => {
    status.style.color = "#2e7d32";
    status.innerText = "✅ Thank you for your feedback!";
    form.reset();
  })
  .catch(() => {
    status.style.color = "red";
    status.innerText = "❌ Something went wrong";
  })
  .finally(() => {
    btnText.style.display = "inline";
    loader.style.display = "none";
  });
});
