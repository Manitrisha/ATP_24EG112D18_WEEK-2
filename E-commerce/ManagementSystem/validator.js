/*Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist

Requirements:
     Create a modular todo app with 3 separate files:

       
          
        i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }*/

function ValidateTitle(title)
{ if(!title){
    return "title required"
   }
  if(title.length<=3){
    return "min 3 char requrired"
   }
   return true

}
function validatePriority(priority)
{
    const priorities=['low','medium','high']
    let res=priority.includes(priority)
    if(res===false)
        return "invalid priority"
   return true
}
function validateDueDate(date)
{
    let dueDate=new Date('2026-10-10')//yyyy-mm-dd
    let today=new Date()//it take date from system
    if(dueDate>today){
        return "invalid date"
    }
  return true
}
export{ValidateTitle,validatePriority,validateDueDate}