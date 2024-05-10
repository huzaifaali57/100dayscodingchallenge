// Question 82
console.log("\n\tQuestion 82 Starts Here\t\n");
/*The above code defines a function that returns the length of
a string and then prints the length of the string "Huzaifa".*/
function stringLength(str) {
    return str.length;
}
console.log(stringLength("Huzaifa"));
// Question 83
console.log("\n\tQuestion 83 Starts Here\t\n");
/*This code converts a string to uppercase and lowercase,
printing both versions.*/
function convertCase(str) {
    var upperStr = str.toUpperCase();
    var lowerStr = str.toLowerCase();
    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
convertCase("Who are you?");
// Question 84
console.log("\n\tQuestion 84 Starts Here\t\n");
/*This code defines a function to  rewrite "JavaScript" to
"TypeScript" in a sentence and prints the result.*/
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
