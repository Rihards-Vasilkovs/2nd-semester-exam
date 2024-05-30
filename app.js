"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const posts = await getProjects(); //Executes code by calling function
  displayProjects(posts); // Calls the displayProjects function
}

async function getProjects() {
  const response = await fetch ("https://wp.rihardsmedia.dk/wp-json/wp/v2/posts?acf_format=standard"); //Fetches data from URL
  const data = await response.json(); //Waits until the json has been loaded
  return data;
}

function displayProjects(posts) {   
  for (const post of posts) {
    projectsList.insertAdjacentHTML(
      "beforeend",
      `<li>${post.title.rendered}</li>` //For each post, inserts a list HTML element at the end of the projectsList element in the DOM. 
    )
  }
}
