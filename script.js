const url = "http://localhost:5000/api/posts";

let fname = document.getElementById("fname").value,
  lname = document.getElementById("lname").value,
  email = document.getElementById("email").value,
  pwd = document.getElementById("pwd").value;
e.preventDefault();
// save into API
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    fname: String,
    lname: String,
    email: email,
    pwd: password,
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log(users);
  });

//register user
function register() {
  fetch(url)
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
  const password = document.getElementById("password").value;

  fetch(url)
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
