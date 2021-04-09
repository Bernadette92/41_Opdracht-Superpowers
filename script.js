const superheroes = [
{
"name": "Batman",
"publisher": "DC Comics",
"alter_ego": "Bruce Wayne",
"first_appearance": "Detective Comics #27",
"weight": "210"
},
{
"name": "Superman",
"publisher": "DC Comics",
"alter_ego": "Kal-El",
"first_appearance": "Action Comics #1",
"weight": "220"
},
{
"name": "Flash",
"publisher": "DC Comics",
"alter_ego": "Jay Garrick",
"first_appearance": "Flash Comics #1",
"weight": "195"
},
{
"name": "Green Lantern",
"publisher": "DC Comics",
"alter_ego": "Alan Scott",
"first_appearance": "All-American Comics #16",
"weight": "186"
},
{
"name": "Green Arrow",
"publisher": "DC Comics",
"alter_ego": "Oliver Queen",
"first_appearance": "All-American Comics #16",
"weight": "195"
},
{
"name": "Wonder Woman",
"publisher": "DC Comics",
"alter_ego": "Princess Diana",
"first_appearance": "The Incredible Hulk #180",
"weight": "165"
},
{
"name": "Blue Beetle",
"publisher": "DC Comics",
"alter_ego": "Dan Garret",
"first_appearance": "Mystery Men Comics #1",
"weight": "145"
},
{
"name": "Spider Man",
"publisher": "Marvel Comics",
"alter_ego": "Peter Parker",
"first_appearance": "Amazing Fantasy #15",
"weight": "167"
},
{
"name": "Captain America",
"publisher": "Marvel Comics",
"alter_ego": "Steve Rogers",
"first_appearance": "Captain America Comics #1",
"weight": "220"
},
{
"name": "Iron Man",
"publisher": "Marvel Comics",
"alter_ego": "Tony Stark",
"first_appearance": "Tales of Suspense #39",
"weight": "250"
},
{
"name": "Thor",
"publisher": "Marvel Comics",
"alter_ego": "Thor Odinson",
"first_appearance": "Journey into Myster #83",
"weight": "200"
},
{
"name": "Hulk",
"publisher": "Marvel Comics",
"alter_ego": "Bruce Banner",
"first_appearance": "The Incredible Hulk #1",
"weight": "1400"
},
{
"name": "Wolverine",
"publisher": "Marvel Comics",
"alter_ego": "James Howlett",
"first_appearance": "The Incredible Hulk #180",
"weight": "200"
},
{
"name": "Daredevil",
"publisher": "Marvel Comics",
"alter_ego": "Matthew Michael Murdock",
"first_appearance": "Daredevil #1",
"weight": "200"
},
{
"name": "Silver Surfer",
"publisher": "Marvel Comics",
"alter_ego": "Norrin Radd",
"first_appearance": "The Fantastic Four #48",
"weight": "unknown"
}
];

//ARRAY OF ALL SUPERHEROES
// const superheroesNames = superheroes.map(function(superheroes){
//     return superheroes.name;
// })
// console.log(superheroesNames);

// SUPERHEROES UNDER 190 POUNDS
// const lightSuperheroes = superheroes.filter (function (superheroes){
//     if (superheroes.weight < 190 ){
//         return superheroes
//     }
// });
// console.log(lightSuperheroes)

// SUPERHEROES WEIGING 200 POUNDS
// const twoWeightSuperheroes = superheroes
// .filter (superheroes => superheroes.weight == 200)
// .map (superheroes => superheroes.name)


// console.log(twoWeightSuperheroes)

// FIRST APPERANCE 
// const firstAppearance = superheroes.map(function(superheroes){
//     return superheroes.first_appearance;
// })
// console.log(firstAppearance);

// MARVEL SUPERHEROES
// const marvelSuperheroes = superheroes
// .filter (superheroes => superheroes.publisher == "Marvel Comics")

// console.log(marvelSuperheroes)

// DC SUPERHEROES
// const DCSuperheroes = superheroes
// .filter (superheroes => superheroes.publisher == "DC Comics")

// console.log(DCSuperheroes)

// WEIGHT OF MARVEL
// const marvelSuperheroesAge = superheroes
// .filter (superheroes => superheroes.publisher == "Marvel Comics")
// .filter (superheroes => superheroes.weight >= 10)
// .reduce ((total, superheroes) => "" + superheroes.weight, 0)


// console.log(marvelSuperheroesAge)

// WEIGHT OF DC
const DCSuperheroesAge = superheroes
.filter (superheroes => superheroes.publisher == "DC Comics")
.filter (superheroes => superheroes.weight >= 10)
.reduce ((total, superheroes) => "" + superheroes.weight, 0)


console.log(DCSuperheroesAge)
