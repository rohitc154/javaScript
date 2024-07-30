// ---------- :) First Way to declare String (: ---------------
const name = "Rohit";
const repoCount = 50;

// console.log(name + repoCount); // Not a good way to concatenate strings

// Using string interpolation method
// console.log(`Hello! My name is ${name} and my RepoCount is ${repoCount}`);

// ------------ :) Second way to declare String (: ---------------
// const newStr = new String("New String")
// console.log(newStr[0]);
// console.log(newStr[1]);

// Accessing the prototype of a string
// console.log(newStr.__proto__);

// ------------ :) String Methods (: ---------------

// console.log(name.substring(2,5));

// const newStr = name.slice(-8,2);
// console.log(newStr);

// -------->trim
const str = "       rohit       ";
// console.log(str);
// console.log(str.trim());

//--------->Replace
const url = "https://rohit.com/rohit%20kumar" // '%20 means ' '(space) in url encoding
// console.log(url.replace('%20',' ')); 

// -------->includes
// console.log(url.includes('komla'));

// --------->split : spliting string based on certain characters, It returns an array
// console.log(url.split('/'));

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g; // If the g flag were included, it would return all matching letters in the string. Without the g flag, the regular expression will stop searching after finding the first match.
const found = paragraph.match(regex);

console.log(found);