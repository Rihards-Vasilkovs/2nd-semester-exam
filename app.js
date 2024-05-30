"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const posts = await getProjects(); //Executes code by calling function
  displayProjects(posts); // Calls the displayProjects function
}

async function getProjects() {
  const response = await fetch ("https://wp.rihardsmedia.dk/wp-json/wp/v2/posts?acf_format=standard");
  const data = await response.json();
  return data;
}

function displayProjects(posts) {
  const projectsList = document.querySelector("#projects-list");
  
  for (const post of posts) {
    projectsList.insertAdjacentHTML(
      "beforeend",
      `<li>${post.title.rendered}</li>`
    )
  }
}
