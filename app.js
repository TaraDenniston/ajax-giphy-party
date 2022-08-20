console.log("Let's get this party started!");


async function getGif(searchTerm) {
  // Parameters for request
  const endpoint = 'https://api.giphy.com/v1/gifs/search';
  const options = {
    api_key: '11b7gdhiybeRS0FWR2Fp7ZrbvgyjWHWr',
    q: searchTerm,
    rating: 'g'
  };

  try {
    // Send request
    const response = await axios.get(endpoint, {params: options});

    // Extract url for random GIF
    const array = response.data.data;
    const idx = Math.floor(Math.random() * array.length)

    // return array[idx].embed_url;
    appendGif(array[idx].images.original.url);

  } catch(error) {
    alert("Not a valid search term");
    // display a random GIF if the search term does not work
    const errResponse = await axios.get('https://api.giphy.com/v1/gifs/random', {params: options});
    appendGif(errResponse.data.data.images.original.url);
  }  
}

const board = document.querySelector('#gif-board');
const appendGif = (url) => {
  const newGif = document.createElement('div');
  newGif.className = "p-3";
  const img = document.createElement('img');
  img.style = "max-height: 18rem;"
  img.src = url;
  newGif.append(img);
  board.append(newGif);
}

const form = document.querySelector('#search-form');
const input = document.querySelector('#search');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getGif(input.value);
  input.value = '';
})

const removeBtn = document.querySelector('#remove');
removeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  board.innerHTML = '';
})


