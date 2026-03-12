/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:*/
const marks = [78, 92, 35, 88, 40, 67];

//Tasks:
  //  1. filter() marks ≥ 40 (pass marks)
  let output = marks.filter(marks=>marks>=40)
  console.log(output)

 //   2. map() to add 5 grace marks to each student
 let output1=marks.map(marks=>marks+5)
   console.log(output1)
   // 3. reduce() to find highest mark
let output2=marks.reduce((highele,ele)=>ele>highele)
     console.log(output2)
    //4. find() first mark below 40
    let output3=marks.find(marks=>marks<40)
    console.log(output3)
    //5. findIndex() of mark 92
    let output5=marks.findIndex(marks=>marks==92)
    console.log(output5)
