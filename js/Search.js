/**
 * Created by Clay on 3/6/2017.
 */
// find template and compile it
var resultsPlaceholder = document.getElementById('results');


var searchArtists = function (artist) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'artist'
        }, success: function (response) {
            resultsPlaceholder.innerHTML = (response);
        }
    });
};

results.addEventListener('submit', function (e) {
    var target = e.target;
    if (target !== null && target.classList.contains('albumCover')) {
    }
});

document.getElementById('artist-search').addEventListener('submit', function (e) {
    e.preventDefault();
    searchArtists(document.getElementById('artist').value);
}, false);