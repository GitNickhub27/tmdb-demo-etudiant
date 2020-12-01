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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuXHJcbiAgICBsZXQgY29ubmV4aW9uID0gbmV3IE1vdmllREIoKTtcclxuICAgIGNvbm5leGlvbi5yZXF1ZXRlRGVybmllckZpbG0oKTtcclxuXHJcblxyXG59KTtcclxuXHJcbmNsYXNzIE1vdmllREIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IE1vdmllREIoKVwiKTtcclxuICAgICAgICB0aGlzLmFwaUtleSA9IFwiYWM3OTc2OGY5ZjhjMzQ5OGEzZTQ3OGVjNmJiNWNlMzhcIjtcclxuICAgICAgICB0aGlzLmxhbmcgPSBcImZyLUNBXCI7XHJcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL1wiO1xyXG4gICAgICAgIHRoaXMuaW1nUGF0aCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvXCJcclxuICAgICAgICB0aGlzLlRvdGFsRmlsbSA9IDg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWV0ZURlcm5pZXJGaWxtKCkge1xyXG4gICAgICAgIGxldCByZXF1ZXRlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWV0ZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCB0aGlzLnJldG91ckRlcm5pZXJGaWxtLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJlcXVldGUub3BlbihcIkdFVFwiLCB0aGlzLmJhc2VVUkwgKyBcIm1vdmllL3BvcHVsYXI/YXBpX2tleT1cIiArIHRoaXMuYXBpS2V5ICsgXCImbGFuZ3VhZ2U9XCIgKyB0aGlzLmxhbmcgKyBcIiZwYWdlPTFcIilcclxuICAgICAgICByZXF1ZXRlLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXRvdXJEZXJuaWVyRmlsbShldmVudCkge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0YXJnZXQucmVzcG9uc2VUZXh0KS5yZXN1bHRzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuYWZmaWNoZXJEZXJuaWVyRmlsbShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBhZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFmZmljaGVyRGVybmllckZpbG1cIik7XHJcblxyXG4gICAgICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0ZS1maWxtc1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWN0aW9uKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGxhdGUgLmZpbG1cIikuY2xvbmVOb2RlKHRydWUpO1xyXG4gIGFydGljbGUucXVlcnlTZWxlY3RvcignaDInKS5pbm5lckhUTUwgPSBkYXRhW2ldLnRpdGxlO1xyXG5cclxuICAgICAgICAgLyogICBpZihkYXRhW2ldLm92ZXJ2aWV3ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IGRhdGFbaV0ub3ZlcnZpZXc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGFydGljbGUucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gXCJBdWN1bmUgZGVzY3JpcHRpb24gbidlc3QgZGlzcG9uaWJsZS5cIjtcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIGFydGljbGUucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gZGF0YVtpXS5vdmVydmlldyB8fCBcIkF1Y3VuZSBkZXNjcmlwdGlvbiBuJ2VzdCBkaXNwb25pYmxlLlwiO1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB0aGlzLmltZ1BhdGggKyBcInczMDBcIiArIGRhdGFbaV0ucG9zdGVyX3BhdGg7XHJcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhcnRpY2xlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl0sImZpbGUiOiJzY3JpcHQuanMifQ==
