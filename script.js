const url = "https://6427cafe46fd35eb7c45bead.mockapi.io/employee";

let fname = document.getElementById("fname").value,
  lname = document.getElementById("lname").value,
  email = document.getElementById("email").value,
  pwd = document.getElementById("pwd").value;

//GET task
fetch('https://6427cafe46fd35eb7c45bead.mockapi.io/employee/tasks', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
})

//register user
function register() {
  e.preventDefault;
  fetch("https://6427cafe46fd35eb7c45bead.mockapi.io/employee/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      pwd: password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const sameEmail = users.find((e) => e.email === email);
      if (!email) {
        alert("Please enter your email address");
        console.log(email);
      } else if (!pwd) {
        alert("Please enter your password");
      } else if (sameEmail !== undefined) {
        alert("Email already registered");
      } else {
        sendUserData();
        alert("success!");
        window.location.href = "index.html";
      }
    });
}

//login
function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pwd").value;

  fetch('https://6427cafe46fd35eb7c45bead.mockapi.io/employee/tasks')
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const sameEmailPassword = users.find(
        (e) => e.email === email && e.password === password
      );
      if (!email) {
        alert("Please enter your email address");
        console.log(email);
      } else if (!pwd) {
        alert("Please enter your password");
      } else if (sameEmailPassword === undefined) {
        alert("Please register your email and password first");
      } else if (sameEmailPassword !== undefined) {
        alert("success!");
        window.location.href = "homepage.html";
      }
    });
}
