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
        this.imgPath = "https://image.tmdb.org/t/p/w500/"
        this.TotalFilm = 8;
    }

    requeteDernierFilm() {
        let requete = new XMLHttpRequest();
        requete.addEventListener("loadend", this.retourDernierFilm.bind(this));
        requete.open("GET", this.baseURL + "movie/top_rated?api_key=" + this.apiKey + "&language=" + this.lang + "&page=1")
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
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);


        }


    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuXHJcbiAgICBsZXQgY29ubmV4aW9uID0gbmV3IE1vdmllREIoKTtcclxuICAgIGNvbm5leGlvbi5yZXF1ZXRlRGVybmllckZpbG0oKTtcclxuXHJcblxyXG59KTtcclxuXHJcbmNsYXNzIE1vdmllREIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBNb3ZpZURCKClcIik7XHJcbiAgICAgICAgdGhpcy5hcGlLZXkgPSBcImFjNzk3NjhmOWY4YzM0OThhM2U0NzhlYzZiYjVjZTM4XCI7XHJcbiAgICAgICAgdGhpcy5sYW5nID0gXCJmci1DQVwiO1xyXG4gICAgICAgIHRoaXMuYmFzZVVSTCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9cIjtcclxuICAgICAgICB0aGlzLmltZ1BhdGggPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvXCJcclxuICAgICAgICB0aGlzLlRvdGFsRmlsbSA9IDg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWV0ZURlcm5pZXJGaWxtKCkge1xyXG4gICAgICAgIGxldCByZXF1ZXRlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWV0ZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCB0aGlzLnJldG91ckRlcm5pZXJGaWxtLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJlcXVldGUub3BlbihcIkdFVFwiLCB0aGlzLmJhc2VVUkwgKyBcIm1vdmllL3RvcF9yYXRlZD9hcGlfa2V5PVwiICsgdGhpcy5hcGlLZXkgKyBcIiZsYW5ndWFnZT1cIiArIHRoaXMubGFuZyArIFwiJnBhZ2U9MVwiKVxyXG4gICAgICAgIHJlcXVldGUuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldG91ckRlcm5pZXJGaWxtKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5hZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmZmljaGVyRGVybmllckZpbG0oZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWZmaWNoZXJEZXJuaWVyRmlsbVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVtpXS50aXRsZSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
