function removeCharacter(str, index) {
    if (index < 0 || index >= str.length) {
        return str; // If the index is out of bounds, return the original string
    }
    // Get the part before the index and the part after the index, then concatenate them
    return str.slice(0, index) + str.slice(index + 1);
}

let originalString = "Hello, World!";
let modifiedString = removeCharacter(originalString, 7);
console.log(modifiedString); // Output: "Hello, orld!"
