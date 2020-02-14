require("dotenv").config();

var axios = require("axios");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// bands in town grab ---------------------------------------
function artistGrab() {


    var artist = process.argv[4];

    if (process.argv[3] === "concert") {


        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
            function (response) {

                console.log(data);
            }
        );
    }
};

artistGrab();

// spotify grab ---------------------------------------------------------
function songGrab() {

    var Spotify = require('node-spotify-api');

    var track = process.argv[4];

    if (process.arg[3] === "song") {


        spotify.search({ type: 'track', query: track }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            console.log(data);
        });
    }
};

songGrab();

// movie grab -------------------------------------------------------------
function movieGrab() {


    var movie = process.argv[4];

    if (process.argv[3] === "film") {

        axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                console.log(data);
            })
    }
};

movieGrab();