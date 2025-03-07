function register(event) {
  event.preventDefault();

  const username = document.querySelector("#usernameSignup").value;
  const password = document.querySelector("#passSignup").value;

  if (!username || !password) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    alert("Tài khoản đã tồn tại. Vui lòng chọn tên khác!");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công! Chuyển đến trang đăng nhập...");
  window.location.href = "login.html";
}

function login(event) {
  event.preventDefault();

  const username = document.querySelector("#usernameLogin").value;
  const password = document.querySelector("#passLogin").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (validUser) {
    alert("Đăng nhập thành công!");
    localStorage.setItem("loggedInUser", username);
    window.location.href = "/index.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu. Vui lòng thử lại!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.querySelector("#togglePassword");
  const passwordInput =
    document.querySelector("#passLogin") ||
    document.querySelector("#passSignup");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("change", function () {
      passwordInput.type = this.checked ? "text" : "password";
    });
  }
});
