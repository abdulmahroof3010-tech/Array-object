// You are given an array of numbers:




// - Write a function that returns the square of a number.
// - Use this function to create a new array of squared numbers.
// - Create a new array containing only the squared numbers that are greater than 50.
// - Calculate the sum of all squared numbers.

const numbers = [2, 5, 8, 12];

function square(numbers){
    let squ=[];
    for(let i=0;i<numbers.length;i++){
         squ.push(numbers[i]**2);

    }
    return squ

}
console.log(square(numbers));


let result=numbers.map(n=>n**2);
console.log(result)


//2
let output=result.filter(n=>n>50);
console.log(output);

let out=result.reduce((total,curr)=>total+=curr,0)
console.log(out)