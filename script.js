document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("demoBtn");
  const msg = document.getElementById("welcomeMsg");

  if (btn && msg) {
    btn.addEventListener("click", function () {
      if (msg.textContent === "") {
        msg.textContent = "🎉 Thanks for stopping by! Hope you have a great day!";
      } else {
        msg.textContent = "";
      }
    });
  }
});
