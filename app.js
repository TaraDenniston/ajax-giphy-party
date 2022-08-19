console.log("Let's get this party started!");


async function getGif(searchTerm) {
  // Parameters for request
  const endpoint = 'https://api.giphy.com/v1/gifs/search';
  const options = {
    api_key: '11b7gdhiybeRS0FWR2Fp7ZrbvgyjWHWr',
    q: searchTerm,
    rating: 'g'
  };

  // Send request
  const response = await axios.get(endpoint, {params: options});

  // Extract url for random GIF
  const array = response.data.data;
  const idx = Math.floor(Math.random() * array.length)
  return array[idx].embed_url;
}

const appendGif = (url) => {

}

let getInput = () => document.querySelector('#search').value;

getGif('cat');

console.log(getInput());

