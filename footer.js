// ===== Footer: "Get updates" form (front-end only demo) =====
const subscribeForm = document.getElementById("subscribeForm");
const subscribeEmail = document.getElementById("subscribeEmail");
const subscribeNote = document.getElementById("subscribeNote");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = subscribeEmail.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    subscribeNote.classList.toggle("bad", !valid);
    subscribeNote.classList.toggle("ok", valid);

    if (valid) {
      subscribeNote.textContent = "Thanks! You are on the list.";
      subscribeEmail.value = "";
    } else {
      subscribeNote.textContent = "Please enter a valid email address.";
    }
  });
}
