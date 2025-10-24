const orders = [
  { id: 1, customer: "Alice", total: 250, status: "completed" },
  { id: 2, customer: "Bob", total: 80, status: "pending" },
  { id: 3, customer: "Charlie", total: 120, status: "completed" },
  { id: 4, customer: "Dave", total: 300, status: "completed" },
  { id: 5, customer: "Eve", total: 50, status: "pending" }
];







// 1. Create a *new array* containing only the *totals of completed orders*.
let result=orders.filter(x=>x.status=="completed").map(x=>x.total)
console.log(result)



// 2. Calculate the *sum of all completed order totals*.
      let output=result.reduce((sum,val)=>sum+=val,0)
      console.log(output)



// 3. Create a *new array of customer names* who have *completed orders with totals greater than 200*.
     let main=orders.filter(x=>x.total>200).map(x=>x.customer);
     console.log(main)




// 5. Write a *function* that, given an order object, returns a string like:
    
//     "Customer <name> has an order of $<total> and its status is <status>".
    
//     Use this function to *print all orders* to the console.
//     
    function str(orders){
      let cost="";
      for(let x in orders){
         cost+=`Customer ${orders[x].customer} has an order of ${orders[x].total} and its status is ${orders[x].status}\n`
      }
      return cost
}

console.log(str(orders));


