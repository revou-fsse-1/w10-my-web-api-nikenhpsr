const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const postsList = document.querySelector(".post-list");
const addPostForm = document.querySelector(".add-post-form");
const titleValue = document.getElementById("title-value");
const bodyValue = document.getElementById("body-value");
const btnSubmit = document.querySelector(".btn");
let output = "";

const renderPost = (posts) => {
  posts.forEach((post) => {
    output += `<div class="card mt-4 col-md-6 bg-light">
        <div class="card-body" data-id=${post._id}>
          <h5 class="card-title">${post.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${post.date}</h6>
          <p class="card-text">
            ${post.body}
          </p>
          <a href="#" class="card-link" id="edit-post">Edit</a>
          <a href="#" class="card-link" id="delete-post">Delete</a>
        </div>
      </div>`;
  });
  postsList.innerHTML = output;
};

const url = "http://localhost:5000/api/posts";

// GET - READ posts
// Method: GET

fetch(url)
  .then((res) => res.json())
  .then((data) => renderPost(data));

postsList.addEventListener("click", (e) => {
  e.preventDefault();
  let delButtonIsPressed = e.targer.id == "delete-post";
  let editButtonIsPressed = e.targer.id == "edit-post";

  //DEL Method
  if (delButtonIsPressed) {
    fetch(`${url}/e.target.parentElement.dataset.id`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => location.reload());
  }
  if (editButtonIsPressed) {
    const parent = e.target.parentElement;
    let titleContent = parent.querySelector(".card-title").textContent;
    let bodyContent = parent.querySelector(".card-text").textContent;

    titleValue.value = titleContent;
    bodyValue.value = bodyContent;
  }

  //UPDATE or PATCH Method
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titleValue: titleValue.value,
        bodyValue: bodyValue.value,
      }),
    }).then((res) => res.json())
    .then(() => location.reload());
  });
});

// POST Methods
addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: titleValue.value,
      body: bodyValue.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      renderPost(dataArr);
    });
    //reset input field to empty
    titleValue.value ='';
    bodyValue.value = '';
});
