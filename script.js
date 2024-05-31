// Global selects;
const jokeContainer = document.getElementById('joke');
const jokeGenerator = document.getElementById('joke-btn');

// Generate joke function
const generateJoke = () => {
  // XHR Object init
  const xhr = new XMLHttpRequest();
  // Open request
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  // Handle data;
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeContainer.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeContainer.innerHTML =
          'Chuck Norris decided against this. You died!';
      }
    }
  };

  // Send request
  xhr.send();
};

// Event
jokeGenerator.addEventListener('click', generateJoke);
// Event on load - to populate with joke;
document.addEventListener('DOMContentLoaded', generateJoke);
