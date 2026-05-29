console.log("script fut!");

document.addEventListener("DOMContentLoaded", () => {
  const registerBtn = document.getElementById("registerBtn");
  const loginBtn = document.getElementById("loginBtn");

  registerBtn?.addEventListener("click", () => {
    alert("Regisztráció gomb működik!");
  });

  loginBtn?.addEventListener("click", () => {
    alert("Login gomb működik!");
  });
});
