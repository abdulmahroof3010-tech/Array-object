const student={
    name:"Mahroof",
    class:"BCA",
    age:21
}

// How do you access the student’s name from the object?
console.log(student.name);

// How can you add a new property called mark with value 85 to the object?

student.mark=85;
console.log(student);


// How can you change the value of age to 22?
student.age=22;
console.log(student);

// How do you delete the property class from the object?

delete student.class;
console.log(student);

// How can you check if the object has the property age?
console.log("age" in student);

console.log(student.hasOwnProperty("age"))


// Write a function that takes the students object and returns a formatted string like

function obj(student){
    
    return `${student.name} is ${student.age} years old and studying in ${student.class}`
}
console.log(obj(student));

// How can you loop through all properties of the students object and print both the key and value

for(let i in student){
    console.log(i+ " : "+student[i])
}


// Convert the students object into an array of keys and an array of values;

let come=Object.entries(student)
console.log(come)

// Make a copy of the students object without affecting the original one.
let copy={...student};
console.log(copy);
console.log(student);


const students = [
  { name: "Mahroof", class: "BCA", age: 21 },
  { name: "Ameer", class: "BBA", age: 22 },
  { name: "Riya", class: "BCA", age: 20 }
];


// Filter all students from "BCA".
let result=students.filter((c)=>c.class=="BCA");
console.log(result);

// Find the oldest student.
let result1=students.reduce((acc,curr)=>{
   return curr.age>acc.age ? curr : acc
})
console.log(result1)


// Create an array of names only.

let result2=students.map(n=>n.name)
console.log(result2)
