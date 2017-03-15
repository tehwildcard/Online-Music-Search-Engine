/**
 * Created by Clay on 3/6/2017.
 */
//var webServiceURL = ;


function start(){
    document.getElementById("submit").addEventListener("click", search, false);
    document.getElementById("search").addEventListener("click", search, false);
    //document.getElementById("artist").addEventListener("click", METHOD, false);
    document.getElementById("results").style.display = 'none';
}

function search(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML = myObj.name;
        }
    };
    xmlhttp.open("GET", "json_demo.txt", true);
    xmlhttp.send();

    displaySearchResults();
    displayGenre();
    displayRelatedArtists();
    displayAlbumCover();
}

function displaySearchResults() {
    var myObj = { "name":"John", "age":30, "car":null };
    for (x in myObj) {
        document.getElementById("results").innerHTML += myObj[x] + "<br>";
    }
}
function displayGenre() {
    var myObj = { "name":"John", "age":30, "car":null };
    for (x in myObj) {
        document.getElementById("genre").innerHTML += myObj[x] + "<br>";
    }

}
function displayRelatedArtists() {
    var myObj = { "name":"John", "age":30, "car":null };
    for (x in myObj) {
        document.getElementById("related").innerHTML += myObj[x] + "<br>";
    }
}
function displayAlbumCover() {
    var myObj = { "name":"John", "age":30, "car":null };
    for (x in myObj) {
        document.getElementById("albumCover").innerHTML += myObj[x] + "<br>";
    }
}
