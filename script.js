$(document).ready(function () {
	fetchNews();
});

function fetchNews() {
	fetch("https://api.spaceflightnewsapi.net/v4/reports/?limit=6", {
		headers: { accept: "application/json" },
	})
		.then((response) => response.json())
		.then((data) => {
			const newsCards = $("#news-cards");
			newsCards.empty();

			data.results.forEach((news) => {
				const cardHtml = `
                        <div class="col-md-4">
                            <div class="card">
                                <img src="${news.image_url}" class="card-img-top" alt="${news.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${news.title}</h5>
                                    <p class="card-text">${news.summary}</p>
                                    <a href="${news.url}" class="btn btn-primary" target="_blank">Read More</a>
                                </div>
                            </div>
                        </div>
                    `;
				newsCards.append(cardHtml);
			});
		})
		.catch((error) => {
			console.error("Error fetching news:", error);
		});
}
