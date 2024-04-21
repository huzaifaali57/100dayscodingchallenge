// Question 40
console.log("\n\tQuestion 40 Starts Here\t\n");
function make_album(artist, title, tracks?: number) {
  return {
    artist: artist,
    title: title,
    tracks: tracks || 0,
  };
}
// Creating three albums
let album1 = make_album("Bob Dylan", "Blonde on Blonde");
console.log(album1);
let album2 = make_album("The Beatles", "Abbey Road", 17);
console.log(album2);
let album3 = make_album("David Hidalgo", "Camino Real");
console.log(album3);

// Question 41
console.log("\n\tQuestion 41 Starts Here\t\n");
let magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
function show_magicians(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}
show_magicians(magicians);

// Question 42
console.log("\n\tQuestion 42 Starts Here\t\n");
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `${magicians[i]} the Great`;
  }
}
function show_mmagicians(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}
make_great(magicians);
show_mmagicians(magicians);