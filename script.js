// Global selects;
const jokeContainer = document.getElementById('joke');
const jokeGenerator = document.getElementById('joke-btn');
// XHR Object init
const xhr = new XMLHttpRequest();

// Handle dat;
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);

    // Generating;
    jokeContainer.innerHTML = '';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (key === 'value') {
          const text = document.createElement('p');
          text.innerHTML = `
            ${data[key]};
        `;
          jokeContainer.appendChild(text);
        }
      }
    }
  }
};
// Event
jokeGenerator.addEventListener('click', () => {
  // Open state?
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  // Send request
  xhr.send();
});
