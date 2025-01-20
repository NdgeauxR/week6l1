"use strict";

const ul = document.getElementById("ul-all-numbers");
const numbers = [100, 456, 98, 45, 43, 73];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  ul.innerHTML += `<li>${number}</li>`;
}


const evens = numbers.filter((number) => number % 2 === 0);
const evenUl = document.getElementById("ul-even-numbers");

for (let i = 0; i < evens.length; i++) {
  const number = evens[i];
  evenUl.innerHTML += `<li>${number}</li>`;
}

// Task 2

let blogPosts = [
  { id: 1, title: "Blog Post 1", author: "Author A", date: "2023-11-15" },
  { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" },
]
const blogPostUl = document.getElementById("div-blog-posts");
for (let i = 0; i < blogPosts.length; i++) {
  const post = blogPosts[i];
  const postHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${post.author}</p>
    <p class="card-text">${post.date}</p> 
  </div>
</div>
  `;
  blogPostUl.innerHTML += postHTML;
}

const firstBlogPost = blogPosts[0];
const firstBlogPostHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${firstBlogPost.title}</h5>
    <p class="card-text">${firstBlogPost.author}</p>
    <p class="card-text">${firstBlogPost.date}</p> 
  </div>`

const firstBlogPostDiv = document.getElementById("first-Blog-Post");
firstBlogPostDiv.innerHTML = firstBlogPostHTML;

let blogPosts2 = [
  { id: 1, title: "Blog Post 1", author: "Author A", date: "2023-11-15" },
  { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" },
  { id: 3, title: "Blog Post 3", author: "Author C", date: "2023-12-15" },
  { id: 4, title: "Blog Post 4", author: "Author D", date: "2023-12-30" },
  { id: 5, title: "Blog Post 5", author: "Author E", date: "2024-01-15" },
  { id: 6, title: "Blog Post 6", author: "Author F", date: "2024-02-01" },
  { id: 7, title: "Blog Post 7", author: "Author G", date: "2024-02-15" },
  ];
const blogPostUl2 = document.getElementById("div-blog-posts2");
for (let i = 0; i < blogPosts2.length; i++) {
  const post = blogPosts2[i];
  const postHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${post.author}</p>
    <p class="card-text">${post.date}</p> 
  </div>
</div>
  `;
  blogPostUl2.innerHTML += postHTML;
}
