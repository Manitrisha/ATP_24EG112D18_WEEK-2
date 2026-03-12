/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:*/
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//Tasks:
   // 1. filter() temperatures above 35
   let r=temperatures.filter(temp=>temp>35)
   console.log(r)
   // 2. map() to convert all temperatures from Celsius → Fahrenheit
   let f=temperatures.map(temp=>(temp*9/5)+32)
    console.log(f)
   // 3. reduce() to calculate average temperature
let res=temperatures.reduce((tot,sum)=>tot+sum)
console.log(res)
   // 4. find() first temperature above 40
   const result=temperatures.find((ele,highele)=>ele>40)
   const resu=temperatures.find(temp=>temp>40)
    console.log(resu)
   console.log(result)
  //  5. findIndex() of temperature 28
  const index=temperatures.findIndex(temp=>temp==28)
   console.log(index)
   
   
   
   


