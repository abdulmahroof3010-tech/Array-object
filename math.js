

const bankUsers = [
  { id: 1, name: "Alice", transactions: [200, -50, 100] },
  { id: 2, name: "Bob", transactions: [-100, 200, -50] },
  { id: 3, name: "Charlie", transactions: [500, -300] }
];


// Challenges:

// Calculate current balance per user using reduce.

// Filter users with negative balance.

// Sort users descending by balance.

// Use destructuring and template literals to print "User <name> has balance $<balance>".

// Write a closure function that adds a new transaction and updates balance without modifying original array.




let balances=bankUsers.map(bal=>{
    const balance=bal.transactions.reduce((acc,curr)=>acc+curr,0);
    return {...bal,balance}
})
console.log(balances);

let negative=balances.filter((bal=>bal<0));
console.log(negative);

let sorted=balances.sort((a,b)=>b.balance-a.balance);
console.log(sorted)


sorted.forEach(({name, balance})=>{
    console.log(`User ${name} has balance $${balance}`)
});

    