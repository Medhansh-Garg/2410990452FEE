let movie = { title: "Inception", year: 2010, rating: 8.8 }; 
let mymovie=JSON.stringify(movie);
let newmovie=JSON.parse(mymovie);
console.log("Title:",newmovie.title);