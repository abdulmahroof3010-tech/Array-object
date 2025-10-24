  const products = [
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 15 },
  { name: "Jacket", price: 120 },
  { name: "Socks", price: 5 }
];

// Create a *new array of product names*.


let arr=products.map(x=>x.name);
console.log(arr);

// Create a *new array of discounted prices* (20% off for each product).

let result=products.map(x=>{
   let rs= x.price*(20/100);
   return x.price-rs

})
console.log(result)

// Filter the products to get only those with a *discounted price > 20;
 
let output=result.filter(x=>x>20);
console.log(output);

//  Calculate the *total discounted price* of all products.

let total=result.reduce((sum,val)=>sum+=val,0);
console.log(total)