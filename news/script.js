$(document).ready(function () {
	fetchNews();
});

function fetchNews() {
	const apiKey = "daf7fa897642a09926d63b1d5180114f";
	const genreId = "878"; //genre for science-fiction
	const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

	fetch(apiUrl, {
		headers: { accept: "application/json" },
	})
		.then((response) => response.json())
		.then((data) => {
			let movies = data.results;

			movies = movies.sort(() => 0.5 - Math.random());
			movies = movies.slice(0, 6);

			const movieCardsContainer = document.getElementById("movie-cards");
			movieCardsContainer.innerHTML = "";

			movies.forEach((movie) => {
				const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(movie.title)}`;
				const movieCard = `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
              <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${movie.overview}</p>
                <p class="card-text"><strong>Rating:</strong> ${movie.vote_average}</p>
                <a href="${googleSearchUrl}" target="_blank" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        `;
				movieCardsContainer.innerHTML += movieCard;
			});
		})
		.catch((error) => {
			console.error("Error fetching news:", error);
		});
}
