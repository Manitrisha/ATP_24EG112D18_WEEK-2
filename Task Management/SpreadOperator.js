/*Exercise 1: Copy & Extend an Array
 Goal: Learn array copying with spread    
                        You are given:
          let fruits = ["apple", "banana"]
     -> Print both arrays
                        */
                        
                  /*      ✅ Expected Output
                              ["apple", "banana"]
                                 ["apple", "banana", "orange"]
                        
                        👉 Original array should NOT change.*/
                         let fruits = ["apple", "banana"]
//-> Create a new array moreFruits
let fruits2 = ["apple", "banana","grapes","guava"]
console.log(fruits2)
//    -> Copy all fruits from fruits
let copyfruits=structuredClone(fruits)
console.log(copyfruits)
//-> Add "orange" at the end using spread
copyfruits.push("Orange")
console.log(copyfruits)