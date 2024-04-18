// set a background when input is on focus

const taskInput = document.getElementById("tasks-input");
taskInput.addEventListener("focus", onFocus);
taskInput.addEventListener("blur", onFocus);
taskInput.addEventListener("keypress", onClickAdd);

function onFocus(e) {
  if (e.type == "focus") {
    taskInput.style.backgroundColor = "#FAE566";
  } else {
    taskInput.style.backgroundColor = "";
  }
}

// add a new task to the container

// add event for ADD button

const btnAdd = document.getElementById("add-btn");

btnAdd.addEventListener("click", onClickAdd);

function onClickAdd() {
  if (taskInput.value == "") {
    alert("devi prima scrivere qualcosa per inserire una nuova task");
  } else {
    // take the input value
    const todo = taskInput.value;
    // create new div and set class
    const newDiv = document.createElement("div");
    newDiv.className = "single-task-container";
    // create the p that must be into the div

    // task
    const task = document.createElement("p");
    task.className = "task";
    task.innerHTML = todo;
    // done btn
    const doneBtn = document.createElement("p");
    doneBtn.className = "done-task-btn";
    doneBtn.innerHTML = "V";
    // remove btn
    const removeBtn = document.createElement("p");
    removeBtn.className = "remove-task-btn";
    removeBtn.innerHTML = "X";
    // insert the 3 p into the newDiv

    newDiv.appendChild(task);
    newDiv.appendChild(doneBtn);
    newDiv.appendChild(removeBtn);

    // now append the newDiv into HTML - task container

    const taskContainer = document.querySelector(".task-container");

    taskContainer.appendChild(newDiv);

    // set the input to the default value

    taskInput.value = "";

    // add event to single btn

    // complete single task
    let vBtn = document.querySelectorAll(".done-task-btn");

    for (let i = 0; i < vBtn.length; i++) {
      vBtn[i].addEventListener("click", completeSingleTask);

      function completeSingleTask(e) {
        const thisTask = e.target.parentElement;

        thisTask.className = "single-task-container-left ";

        completedTasksContainer.appendChild(thisTask);

        thisTask.removeChild(thisTask.children[2]);
        thisTask.removeChild(thisTask.children[1]);
      }
    }

    // remove single task

    let xBtn = document.querySelectorAll(".remove-task-btn");

    for (let i = 0; i < xBtn.length; i++) {
      xBtn[i].addEventListener("click", removeSingleTask);

      function removeSingleTask(e) {
        e.target.parentElement.remove();
      }
    }
  }
}

// Add event for CLEAR ALL TASK btn

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", onClickClear);

function onClickClear() {
  const allTasks = document.querySelectorAll(".single-task-container");

  allTasks.forEach(function (task) {
    task.remove();
  });
}

// add completed tasks to the left

const completedTasksContainer = document.querySelector(
  ".completed-task-container-left"
);

// Add event to COMPLETE ALL TASK

const completeTaskBtn = document.getElementById("complete-task-btn");

completeTaskBtn.addEventListener("click", completeAllTasks);

function completeAllTasks() {
  // select all tasks
  const allTasks = document.querySelectorAll(".single-task-container");

  allTasks.forEach(function (task) {
    task.className = "single-task-container-left ";
    completedTasksContainer.appendChild(task);

    task.removeChild(task.children[2]);
    task.removeChild(task.children[1]);
  });
}
