let password = document.getElementById("password");
let power = document.getElementById("point");
let toggle = document.getElementById("togglePwd");

password.oninput = function () {
  let point = 0;
  let value = password.value;
  let widthPower = ["1%", "25%", "50%", "75%", "100%"];
  let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

  if (value.length >= 6) {
    let checks = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
    checks.forEach((regex) => {
      if (regex.test(value)) point++;
    });
  }

  power.style.width = widthPower[point];
  power.style.backgroundColor = colorPower[point];
};

// Toggle password visibility
toggle.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    toggle.textContent = "🙈";
    toggle.title = "Hide Password";
  } else {
    password.type = "password";
    toggle.textContent = "👁️";
    toggle.title = "Show Password";
  }
};
