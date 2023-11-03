// Fetch data from the JSON file
fetch('https://raw.githubusercontent.com/nyxiamin/js-json-lab/main/data.json')
  .then(response => response.json())
  .then(data => displayData(data))
  .catch(error => console.error('Error fetching data:', error));

// Display data in the HTML
function displayData(data) {
  const jsonContainer = document.getElementById('json-container');

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(image);

    jsonContainer.appendChild(card);
  });
}