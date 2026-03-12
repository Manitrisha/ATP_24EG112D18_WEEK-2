/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : */
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Tasks:
  //  1. Use filter() to get only inStock products
  const instockproduct=cart.filter(cartpro=>cartpro.inStock===true)
  console.log(instockproduct)
  //  2. Use map() to create a new array with:  { name, totalPrice }
  const newArray=cart.map(product=>({
   name:product.name,totalprice:product.price*product.quantity
  }))
  console.log(newArray)

 //   3. Use reduce() to calculate grand total cart value
 let grandTotal =cart.reduce((acc,pro)=>acc+pro.totalprice,0)
 console.log(grandTotal)
  //  4. Use find() to get details of "Mouse"
  let details=cart.find(pro=>pro.name='mouse')
  console.log(details)
  //  5. Use findIndex() to find the position of "Keyboard"
  let positionindex=cart.findIndex(pro=>pro.name==='Keyboard')
  console.log(positionindex)