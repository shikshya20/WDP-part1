function addTask()
{
    const newTask=document.createElement('li') //creating li under ul
    const taskList=document.getElementById('taskList')
    taskList.appendChild(newTask)
    newTask.textContent=document.getElementById('inputTask').value
document.getElementById('inputTask').value=""
deleteTask(newTask)
}
function deleteTask(newTask)
{
    const deleteBtn=document.createElement('button')
    deleteBtn.textContent="Delete"
    newTask.appendChild(deleteBtn) //appending button to list
    deleteBtn.onclick=function(){
        newTask.remove()
    }
}
