function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

var next = 0;
function main(){
    let data = fazGet("https://ghibliapi.herokuapp.com/films");
    let listMovie = JSON.parse(data);

    let cover = document.getElementById("cover");
    let title = document.getElementById("title");
    let originalTitle = document.getElementById("original-title");
    let releaseDate = document.getElementById("release-date");
    let description = document.getElementById("description");
    let director = document.getElementById("director");
    let producer = document.getElementById("producer");


    let main = document.getElementById("main2")


    movie = listMovie[next];

    main.style.backgroundImage = `url(${movie.movie_banner})`
    console.log(movie.image)

    cover.src = movie.image;

    title.innerHTML = movie.title
    originalTitle.innerHTML = movie.original_title;
    releaseDate.innerHTML = movie.release_date;

    description.innerHTML = movie.description;

    director.innerHTML = movie.director;
    producer.innerHTML = movie.producer;

}

function nextMovie(){
    next = next + 1;
    main()
}

function backMovie(){
    next = next - 1;
    main()
}



main();
