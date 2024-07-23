// Day 65
// Type Annotations With Function
function greet(message : string , name : string) : string{
    return `${message}, ${name}!`;
}

let message = "Hello";
const Name = "Huzaifa";
let greetings = greet(message, Name);
console.log(greetings);

// Optional And Default Parameter
function whatIf(age? : number, naame : string = "Huzaifa") : string{
    if(age !== undefined){
        return `${naame}'s friend age is 21`
    }else{
        return `What old is ${naame}'s friend ?`
    }
}
let answer = whatIf(21)
console.log(answer)

// Function Rest Parameter
function addAll(...nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      result += nums[i];
    }
    return result;
  }
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // 171.5


// Arrow Function
let addTwoNumbers = (number1:number , number2:number) : number => number1 + number2;
let sum = addTwoNumbers(10.5,0.65)
console.log(sum)  // 11.15


// Anonymous Function
let sub = function (num1 : number , num2 : number) : number {
    return num1 - num2;
}
console.log(sub(19,1.25))  // 17.75

// Void & Never
function logNumber(num: number): void {
    console.log(num);
}
let anss = logNumber(20)
console.log(anss)     // 20

function error(message: string): never {
    throw new Error(message);
}
// let ans = error("Error")
// console.log(ans)     // returns undefined