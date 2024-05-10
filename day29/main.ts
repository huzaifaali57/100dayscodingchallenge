// Question 85
console.log("\n\tQuestion 85 Starts Here\t\n");
/*This code finds the position of the first occurrence of 
"code" in a string (returns -1 if not found).*/
function findCodePosition(str: string): number {
    return str.indexOf("code");
}
console.log(findCodePosition("Learn to code with JavaScript"));

// Question 86
console.log("\n\tQuestion 86 Starts Here\t\n");
/*This code checks if a string contains "JavaScript".*/
function hasJavaScript(str: string): boolean {
    return str.includes("JavaScript");
}
console.log(hasJavaScript("I love coding in JavaScript!"));

// Question 87
console.log("\n\tQuestion 87 Starts Here\t\n");
/*This code extracts the first 10 characters from a string.*/
function extractFirstTenChars(str: string): string {
    return str.substring(0, 10);
}
console.log(extractFirstTenChars("Hello, JavaScript world!"));