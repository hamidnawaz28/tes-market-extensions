const accessKey = 'jjZRGl3iD3z-Aie1itYpJswqVwq22KxKDfikRGqptgE';
const apiUrl = 'https://api.unsplash.com';

// Function to fetch photos from the Unsplash API
async function fetchPhotos(query, page = 1, perPage = 1) {
    const url = `${apiUrl}/photos/random?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}&orientation=landscape`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching photos:', error);
        return [];
    }
}

// Example usage
fetchPhotos('mountains', 1, 1)
    .then(photos => {

        console.log(photos);
        document.querySelector('#tool>img').setAttribute('src', photos.urls.full)
        // Do something with the photos data
    })
    .catch(error => {
        console.error('Error:', error);
    });