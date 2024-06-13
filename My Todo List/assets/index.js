const assignBox = document.getElementById("assign-box");
const todoContainer = document.getElementById("todo-container");
const completeContainer = document.getElementById("complete-container");
const completeCount = document.getElementById("complete-count");
const incompleteCount = document.getElementById("incomplete-count");
const totalCount = document.getElementById("total-count");

// Add to To-Do List Section
// function to add task to To-Do List
function addTask() {

    // takes keyword entered in the assign-box
  const taskie = assignBox.value.trim();
  const task = capitalizer(taskie);

// checks if the assignBox is blank
  if (!task) {
    alert("Blank entry. Please Assign a task -_-");
    return;
  } 

    // creating a new list
  const li = document.createElement("li");

//   changing innerHTML of list
  li.innerHTML = `
  <label id ="check-mark">
    <input type="checkbox">
    <span>${task}</span>
  </label>
  <span class="edit-btn bttn">Edit</span>
  <span class="delete-btn bttn">Delete</span>
    `;

    // returning item to reflect in the list
    todoContainer.appendChild(li);

    // blank the assignBox
    assignBox.value = "";


    // Edit To-Do list section 
const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskAssigned = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

// Checks if checkbox is checked and allocates it to the appropriate list
checkbox.addEventListener("click", function () {
  li.classList.toggle("completed", checkbox.checked);
  if (checkbox.checked) {
            todoContainer.removeChild(li);
            completeContainer.appendChild(li);
        } else {
            completeContainer.removeChild(li);
            todoContainer.appendChild(li);
        }
  countTasks();
});


// Edit button if value is blank or not changed maintains old task but if changed assigns new task and unchecks checkbox
editBtn.addEventListener("click", function () {
  const update = prompt("Edit task:", taskAssigned.textContent);
  if(update.length < 1) {
    alert("Blank entry!");
  } else {
    newTask = capitalizer(update);
    taskAssigned.textContent = newTask;
    li.classList.remove("completed");
    checkbox.checked = false;  
    completeContainer.removeChild(li);
    todoContainer.appendChild(li);
    countTasks();
  }
});


// Deletes task
deleteBtn.addEventListener("click", function () {
  if (confirm("Do you want to delete this task?")) {
    li.remove();
    countTasks();
  }
});

countTasks();
}



//   makes the first letter  of every word upper case
    function capitalizer(gottenWords) {
        var capName = gottenWords.toLowerCase().split(' ');
            for (var i = 0; i < capName.length; i++) {
            capName[i] = capName[i].charAt(0).toUpperCase() + capName[i].substring(1);     
            }
            return capName.join(' '); 
    }

// Counts the number of total, complete and incomplete tasks
    function countTasks() {
        const totalTasks = document.querySelectorAll("li").length;
        const completeTasks = document.querySelectorAll(".completed").length;
        const incompleteTasks = document.querySelectorAll("li:not(.completed)").length;
        totalCount.textContent = totalTasks;
        completeCount.textContent = completeTasks;
        incompleteCount.textContent = incompleteTasks;
    }

