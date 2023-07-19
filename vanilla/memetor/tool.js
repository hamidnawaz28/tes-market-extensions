const accessKey = 'jjZRGl3iD3z-Aie1itYpJswqVwq22KxKDfikRGqptgE';
const apiUrl = 'https://api.memegen.link/images';

// Function to fetch photos from the Unsplash API
async function fetchPhotos() {
    const url = `${apiUrl}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching photos:', error);
        return [];
    }
}

function getRandomNumber(min, max) {
    // Use Math.random() to get a random number between 0 (inclusive) and 1 (exclusive)
    const random = Math.random();

    // Calculate the random number within the specified range
    const randomNumber = Math.floor(random * (max - min + 1)) + min;

    return randomNumber;
}

// Example usage
fetchPhotos()
    .then(meme => {
        const randomNumber = getRandomNumber(0, meme.length - 1);
        console.log(meme);
        document.querySelector('#tool>img').setAttribute('src', meme[randomNumber].url)
    })
    .catch(error => {
        console.error('Error:', error);
    });