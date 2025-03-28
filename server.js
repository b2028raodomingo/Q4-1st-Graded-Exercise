// Loads the express module
const express = require("express");
const hbs = require("hbs");

const bodyParser = require("body-parser");

const path = require("path");

//Creates our express server
const app = express();
const port = 3000;

//Serves static files (we need it to import a css file)
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

//get path for index page
app.get("/", (req, res) => {
  res.render("index");
});

//get path for default viewing
app.get("/happy", (req, res) => {
  res.render("happy");
});

//post path for viewing with submitted form data
app.post("/happy", (req, res) => {
  const { name, gender, number, ...guests } = req.body;
  // happy birthday array to be turned into array of song words
 const happyBirthdaySong = [ "Happy birthday to you","Happy birthday to you",`Happy birthday dear ${name}`, "Happy birthday to you" ];
// Convert guests object to array
const guestsArray = Object.keys(guests)
.filter((key) => key.startsWith("name")) 
.map((key) => guests[key]);


  
 
 const celebrantSong = [];
 const songArray = happyBirthdaySong.join(' ').split(' ');

 // iteration to fill out celebrantSong array
 let guestCycle = 0;
   for (let i = 0; i < songArray.length; i++)
   {
     celebrantSong.push(`${guestsArray[guestCycle]}: ${songArray[i]}`)
     guestCycle += 1;
     guestCycle = guestCycle % guestsArray.length; // modulo if guest count < words in bday song
   }



 // choosing pronoun based on gender data
 let pronoun;
 if (gender == "male")
   {
      pronoun = "he's"
   }
   else
   {
     pronoun = "she's"
   }
 // good fellow song 
 const goodFellowSong = [`For ${pronoun} a jolly good fellow`,`For ${pronoun} a jolly good fellow`,`For ${pronoun} a jolly good fellow, which nobody can deny!`];

 res.render("happy", { name, gender, number, guestsArray, celebrantSong, goodFellowSong }); //render happy.hbs
});

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));

 
