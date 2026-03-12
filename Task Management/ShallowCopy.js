//Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
//🧪 Given Da
/*
 const user = {
      id: 101,
      name: "Ravi",
       preferences: {
     theme: "dark",
                  language: "en"
              };

🎯 Task
    1. Create a shallow copy of user*/
    const user={
 id: 101,
 name: "Ravi",
preferences: {
theme: "dark",
 language: "en"
 }
}
 let copyuser={...user};
 console.log(copyuser)
   // 2. Change:
         // i. name in the copied object
         copyuser.name="mani"

         // ii. preferences.theme in the copied object
         copyuser.preferences.theme="light"
         // iii .Log both original and copied objects
         console.log(copyuser)
         console.log(user)
        //  iv. Observe what changes and what doesn’t

