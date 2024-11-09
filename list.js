// we cached the DOM or accessed the dom by all the id's we provided to our elements
const taskform = document.getElementById("task-form")
const taskinp = document.getElementById("task-input")
const tasklist = document.getElementById("displayed")
const addbutton = document.getElementById("adder") 
const delbutton =document.getElementById("delete")
// 2nd we have to add items to our list in the diplay portion
// when-ever we need to take an value from the input we use .value to get the value from the input
addbutton.addEventListener("click",(e)=>{
    e.preventDefault()
    const taskdata = taskinp.value.trim()
    if(taskdata===""){
        return
    }
    const task = document.createElement("li")
    task.classList.add("task-item")
    task.textContent = taskdata
    task.addEventListener("click",()=>{
        tasklist.classList.toggle("completed")
    })
    tasklist.appendChild(task)
    taskinp.value=""
})
delbutton.addEventListener("click",()=>{
    tasklist.textContent=""
})
