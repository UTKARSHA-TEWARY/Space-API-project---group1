const apiKey = 'ib6DY7q8Lzj6fs9zhRleFKQUgWBipQ2HuUTlMUhr';
const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const photos = data.photos.slice(0,10);
                const roverPhotosElement = document.getElementById('photos');

                    photos.forEach(photo => {
                     const img = document.createElement('img');
                     img.src = photo.img_src;
                     img.alt = 'Mars Rover Photo';
                    roverPhotosElement.appendChild(img);
                 });
            })
            .catch(error => {
                console.error('Error fetching Mars rover photos:', error);
            });