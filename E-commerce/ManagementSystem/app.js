/*iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again*/
import {addTask,getAllTasks} from './task.js'
 addTask("eating","high","2026-08-02")
 addTask("drinking","medium","2026-08-03")
    const task=getAllTasks()
    console.log(task)