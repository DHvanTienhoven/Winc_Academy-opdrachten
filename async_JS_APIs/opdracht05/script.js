const setSingleMovie = async () => {
    const data = await getMovieById("tt6105098");
    const movie = data.movie_results[0];
    const topMovieParagraph = document.getElementById("myTopMovie");

    topMovieParagraph.appendChild(document.createTextNode(movie.title));
  };