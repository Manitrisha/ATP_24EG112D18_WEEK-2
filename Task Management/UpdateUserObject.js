 /*Exercise 2: Update User Object     
  Goal: Learn object cloning & adding new property
  You are given:            */        
          let user = {
      name: "Ravi",
     city: "Hyderabad"
 };
 
 //Tasks
                        
  //-> Create a new object updatedUser
                let updateUser=structuredClone(user)
                      
    // -> Copy all properties from user
                 console.log(updateUser)                     
       //  -> Add a new property age: 25
               updateUser["age"]=25
               console.log(updateUser)             
  //-> Print both objects
         console.log(user)
         console.log(updateUser)               
   /*                     
                        
 ✅ Expected Output
        { name: "Ravi", city: "Hyderabad" }
          { name: "Ravi", city: "Hyderabad", age: 25 }
                        
     👉 Original object should remain unchanged.*/



