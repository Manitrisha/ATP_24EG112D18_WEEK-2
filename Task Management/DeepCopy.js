//Hands-On 2: Shallow Copy (Isolation & Safety Use Case)
//🧪 Given Data:
  const order = {
     orderId: "ORD1001",
  customer: {
  name: "Anita",
      address: {
        city: "Hyderabad",
      pincode: 500085
     }
          },
       items: [
        { product: "Laptop", price: 70000 }
                  ]
                };

//🎯 Task:
     // 1. Create a deep copy of order
     let copyOrder=structuredClone(order);
     console.log.apply(copyOrder)
      //2. Modify in copied object:
           // i. customer.address.city
           copyOrder.customer.address.city="chennai"
           console.log(copyOrder)
         //   ii. items[0].price
         copyOrder.items[0].price = 100000;
         console.log(copyOrder)
          //  iii. Verify original object remains unchanged
          console.log(order)//original remains unchanged