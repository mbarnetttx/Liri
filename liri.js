require("dotenv").config();

var axios = require("axios");

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var fs = require('fs')


var caseData = process.argv[2];

var functionData = process.argv[3];


function pickOne (caseData, functionData) {
    
    switch (caseData) {
        case "song":
            songGet(functionData);
            break;

        case "movie":
            movieGrab(functionData)
            break;

        case "concert":
            artistGrab(functionData)
            break;
        default:
            console.log("Input invalid, please type node filename song/movie/concert input")
    }
}


pickOne(caseData, functionData);

function artistGrab(artist) {


    if (artist === undefined) {
        artist = "Disturbed"
    }

    //create a variable that holds your api url 

    var APILink = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    //create you axios call 
    axios.get(APILink).then(
        function (response) {
            console.log(response.data[0]);
               
        }
    );


};





function songGet (songName) {
    if (songName === undefined) {
        songName = "I want it that way"
    }

    spotify.search({

        type: "track",
        query: caseData

    },
        function (err, data) {
            if (err) {
                console.log(err + "has happened ")
            }
            var holdSong = data.tracks.items;

            for (var i = 0; i < holdSong.length; i++) {
                console.log(i);
                // console.log("artist(s): " + holdSong[i].artists.map(getArtists));
                console.log("song name: " + holdSong[i].name);
                console.log("preview song: " + holdSong[i].preview_url);
                console.log("album: " + holdSong[i].album.name);
                
                console.log("-----------------------------------");

            }
        });
};


function movieGrab(movieName) {
    if (movieName === undefined) {
        movieName = "Cinderella"
    }

    //create a variable that holds your api url 

    var APILink = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"

    //create you axios call 
    axios.get(APILink).then(
        function (response) {
            // console.log(response.data);
            var JSONData = response.data;
            console.log("-----------------------------------");
            console.log("Title: " + JSONData.Title);
            console.log("-----------------------------------");
            console.log("Released: " + JSONData.Year);
            console.log("-----------------------------------");
            console.log("Rated: " + JSONData.Rated);
            console.log("-----------------------------------");
            console.log("Director: " + JSONData.Director);
            console.log("-----------------------------------");
            console.log("Actors: " + JSONData.Actors);
            console.log("-----------------------------------");
            console.log("Plot: " + JSONData.Plot);
            console.log("-----------------------------------");
        });
}





