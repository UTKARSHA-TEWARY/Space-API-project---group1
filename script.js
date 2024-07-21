const apiKey = 'maTab4jU6uf5689m2JWcmOlnoG7aV0dyHkVu2Eh7';
const rover = 'curiosity';
const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=${apiKey}`;

const photosElement = document.getElementById('photos');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.img_src;
            img.alt = photo.camera.full_name;
            photosElement.appendChild(img);
        });
    })
    .catch(error => console.error('Error fetching photos:', error));