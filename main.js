"use strict";

const openBtn = document.querySelector(".questions-block");

openBtn.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) return;

  if (!openBtn.contains(button)) return;

  const questionsText = button.parentElement.parentElement.lastElementChild;

  if (!button.firstElementChild) {
    button.innerHTML = `<span class="btn-value">_</span>`;
    questionsText.classList.add("questions-text-show");
  } else {
    button.textContent = "+";
    questionsText.classList.remove("questions-text-show");
  }
});
