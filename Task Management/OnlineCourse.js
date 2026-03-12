/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:*/
const courses = ["javascript", "react", "node", "mongodb", "express"];

//Tasks:
  //  1. filter() courses with name length > 5
  const nameLength=courses.filter(name=>name.length>5)
  console.log(nameLength)
    //2. map() to convert course names to uppercase
    const results=courses.map(name=>name.toUpperCase())
      console.log(results)
    //3. reduce() to generate a single string:
      //        "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
  const re=results.reduce((acc,ele)=>acc+' '+ '|'+' '+ ele)
     console.log(re)
   // 4. find() the course "react"
   let findele=courses.find(name=>name=="react")
     console.log(findele)
    //5. findIndex() of "node"
    const Index=courses.findIndex(name=>name=="node")
 console.log(Index)
