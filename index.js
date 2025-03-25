const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 7000;


const cities = [
  {
    name: "New York",
    population: 8419000,
    landmass: 783.8, 
    landmark: "Statue of Liberty",
    picture: "https://example.com/newyork.jpg",
  },
  {
    name: "Los Angeles",
    population: 3980000,
    landmass: 1214, 
    landmark: "Hollywood Sign",
    picture: "https://example.com/losangeles.jpg",
  },
  {
    name: "Chicago",
    population: 2716000,
    landmass: 589, 
    landmark: "Willis Tower",
    picture: "https://example.com/chicago.jpg",
  },
  {
    name: "Houston",
    population: 2328000,
    landmass: 1651, 
    landmark: "Space Center Houston",
    picture: "https://example.com/houston.jpg",
  },
  {
    name: "Phoenix",
    population: 1690000,
    landmass: 1340, 
    landmark: "Desert Botanical Garden",
    picture: "https://example.com/phoenix.jpg",
  },
  {
    name: "Philadelphia",
    population: 1584000,
    landmass: 369, 
    landmark: "Liberty Bell",
    picture: "https://example.com/philadelphia.jpg",
  },
  {
    name: "San Antonio",
    population: 1547000,
    landmass: 1214, 
    landmark: "The Alamo",
    picture: "https://example.com/sanantonio.jpg",
  },
  {
    name: "San Diego",
    population: 1424000,
    landmass: 964.5, 
    landmark: "Balboa Park",
    picture: "https://example.com/sandiego.jpg",
  },
  {
    name: "Dallas",
    population: 1341000,
    landmass: 882.9, 
    landmark: "Reunion Tower",
    picture: "https://example.com/dallas.jpg",
  },
  {
    name: "San Jose",
    population: 1035000,
    landmass: 469.7, 
    landmark: "Winchester Mystery House",
    picture: "https://example.com/sanjose.jpg",
  },
];


app.get("/", (req, res) => {
    res.send(cities);
    });


    

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
