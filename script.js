"use strict";

// Number Array
const numbers = [100, 456, 98, 45, 43, 73]; // Updated array

const numberList = document.getElementById("numberList");
numbers.forEach((number) => {
  let li = document.createElement("li");
  li.textContent = number;
  numberList.appendChild(li);
});

const evenNumberList = document.getElementById("evenNumberList");
numbers
  .filter((number) => number % 2 === 0)
  .forEach((number) => {
    let li = document.createElement("li");
    li.textContent = number;
    evenNumberList.appendChild(li);
  });

// Blog Posts
let blogPosts = [
  { id: 1, title: "Blog Post 1", author: "Author A", date: "2023-11-15" },
  { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" },
  { id: 3, title: "Blog Post 3", author: "Author C", date: "2024-01-10" },
  { id: 4, title: "Blog Post 4", author: "Author D", date: "2024-02-20" },
  { id: 5, title: "Blog Post 5", author: "Author E", date: "2024-03-15" },
  { id: 6, title: "Blog Post 6", author: "Author F", date: "2024-04-05" },
  { id: 7, title: "Blog Post 7", author: "Author G", date: "2024-05-12" },
];

const blogPostCards = document.getElementById("blogPostCards");
blogPosts.forEach((post) => {
  let card = `
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">By ${post.author}</p>
              <p class="card-text">${post.date}</p>
            </div>
          </div>
        </div>
      `;
  blogPostCards.innerHTML += card;
});

const firstBlogPostCard = document.getElementById("firstBlogPostCard");
let firstPost = blogPosts[0];
let firstCard = `
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">${firstPost.title}</h5>
            <p class="card-text">By ${firstPost.author}</p>
            <p class="card-text">${firstPost.date}</p>
          </div>
        </div>
      </div>
    `;
firstBlogPostCard.innerHTML = firstCard;
