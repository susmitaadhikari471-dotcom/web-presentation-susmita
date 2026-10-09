document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("demoBtn");
  const msg = document.getElementById("welcomeMsg");

  if (btn && msg) {
    btn.addEventListener("click", function () {
      if (msg.textContent === "") {
        msg.textContent = "✨ hello everyone, Welcome to my mid week presentation!";
      } else {
        msg.textContent = "";
      }
    });
  }
});
