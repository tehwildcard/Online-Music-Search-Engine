/**
 * Created by Clay on 3/6/2017.
 */
//var webServiceURL = ;

var results = document.getElementById('results');
var artistResults = document.getElementById('results');
function start(){
    document.getElementById("submit").addEventListener("click", search, false);
    document.getElementById("search").addEventListener("click", search, false);
    //document.getElementById("artist").addEventListener("click", METHOD, false);
    document.getElementById("results").style.display = 'none';


}

var searchAlbums = function (artist) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: artist,
            type: 'album'
        },
        success: function (response) {
            artistResults.innerHTML = response;
        }
    });
};


document.getElementById('artist-search').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(document.getElementById('artist').value);
}, false);




/*    displaySearchResults();
 displayGenre();
 displayRelatedArtists();
 displayAlbumCover();*/
}

/*function displaySearchResults() {
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
 }*/