function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("All fields are required.");
    return false;
  }

  return true;
}
