$.ajax({
    url: 'http://www.omdbapi.com/?apikey=fe8609c8&s=avengers',
    success: results => {
        const movies = results.Search;
        let cards = '';
        movies.forEach(m => {
            cards += ` <div class="col-md-4 my-3">
                        <div class="card">
                            <img src="${m.Poster}" class="card-img-top">
                            <div class="card-body">
                            <h5 class="card-title">${m.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                            <a href="#" class="btn btn-primary modal-detail-button"  data-toggle="modal" data-target="#movieDetailModal">show details</a>
                            </div>
                        </div>

                    </div>`;
        });
        $('.movie-container').html(cards);
    },
    error: (e) => {
        console.log(e.responseText);
    }
});