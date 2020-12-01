document.addEventListener("DOMContentLoaded", function (evt) {


    let connexion = new MovieDB();
    connexion.requeteDernierFilm();


});

class MovieDB {

    constructor() {
        console.log("New MovieDB()");
        this.apiKey = "ac79768f9f8c3498a3e478ec6bb5ce38";
        this.lang = "fr-CA";
        this.baseURL = "https://api.themoviedb.org/3/";
        this.imgPath = "https://image.tmdb.org/t/p/"
        this.TotalFilm = 8;
    }

    requeteDernierFilm() {
        let requete = new XMLHttpRequest();
        requete.addEventListener("loadend", this.retourDernierFilm.bind(this));
        requete.open("GET", this.baseURL + "movie/popular?api_key=" + this.apiKey + "&language=" + this.lang + "&page=1")
        requete.send();
    }

    retourDernierFilm(event) {
        let target = event.currentTarget;
        let data = JSON.parse(target.responseText).results;
        console.log(data);
        this.afficherDernierFilm(data);
    }

    afficherDernierFilm(data) {
        console.log("afficherDernierFilm");

        let section = document.querySelector(".liste-films");
        console.log(section);
        for (let i = 0; i < data.length; i++) {
        let article = document.querySelector(".template .film").cloneNode(true);
  article.querySelector('h2').innerHTML = data[i].title;

         /*   if(data[i].overview !== "") {
                article.querySelector('.description').innerHTML = data[i].overview;
            }
            else{
                article.querySelector('.description').innerHTML = "Aucune description n'est disponible.";
            }*/
            article.querySelector('.description').innerHTML = data[i].overview || "Aucune description n'est disponible.";
            let image = article.querySelector('img');
            image.src = this.imgPath + "w300" + data[i].poster_path;
        section.appendChild(article);

        }


    }
}
