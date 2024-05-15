// Question 121
console.log("\n\tQuestion 121 Starts Here\t\n");
/*This 'for' loop prints all numbers from 1 to 10 except for 5. 
By skipping the iteration where  'i' is equal to 5 using the continue*/
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Question 122
console.log("\n\tQuestion 122 Starts Here\t\n");
/*This 'while' loop prints numbers in a countdown from 10 to 1 using a 
break statement to exit loop when it encounters 5.*/
let counter: number = 10;
while (counter > 0) {
  if (counter === 5) {
    break;
  }
  console.log(counter);
  counter--;
}

// Question 123
console.log("\n\tQuestion 123 Starts Here\t\n");
/*The code defines a function logUntilVowel that iterates over a string,
printing each character until it finds a vowel.*/
function logUntilVowel(str: string): void {
  const vowels = "aeiouAEIOU";
  for (const char of str) {
    if (vowels.includes(char)) {
      console.log(`First vowel found: ${char}`);
      break;
    }
    console.log(char);
  }
}
logUntilVowel("wrtayvc");