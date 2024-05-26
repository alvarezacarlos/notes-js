let taskListArray = [];

// generate Id
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36);
}

const handleClearInput = () => {
  const taskName = document.getElementById("taskNameInput");
  taskName.value = "";
};

const handleCompleteTask = (e) => {
  let clickedIcon = e.target;
  let clickedTask = clickedIcon.parentNode.parentNode;
  const clickedTaskId = clickedTask.getAttribute("data-id");
  const clickedTaskArrayItem = taskListArray.find(
    (task) => task._id === clickedTaskId
  );

  if (clickedTaskArrayItem.open) {
    clickedTaskArrayItem.open = false;

    clickedIcon.classList.remove("bi-check-circle-fill");
    clickedIcon.classList.add("bi-arrow-counterclockwise");
    
    let taskTitle = clickedTask.querySelector("p");
    taskTitle.style.textDecoration = "line-through";
  } else {
    clickedTaskArrayItem.open = true;

    clickedIcon.classList.remove("bi-arrow-counterclockwise");
    clickedIcon.classList.add("bi-check-circle-fill");

    let taskTitle = clickedTask.querySelector("p");
    taskTitle.style.textDecoration = "none";
  }
};

const handleDeleteTask = (e) => {
  let clickedIcon = e.target;
  let clickedTask = clickedIcon.parentNode.parentNode;
  const clickedTaskId = clickedTask.getAttribute("data-id");
  const clickedTaskIndex = taskListArray.findIndex(
    (task) => task._id === clickedTaskId
  );
  taskListArray.splice(clickedTaskIndex, 1);

  const taskListContainer = document.getElementById("taskListContainer");
  taskListContainer.removeChild(clickedTask);
  console.log(taskListArray);
};

function handleCreateTask() {
  let taskName = document.getElementById("taskNameInput");

  if (taskName.value.trim() === "") {
    return;
  }

  let taskList = document.getElementById("taskListContainer");

  // create new task container
  let newTask = document.createElement("div");

  // add new task description
  let newTaskTitle = document.createElement("p");
  newTaskTitle.innerHTML = taskName.value;
  let taskId = generateId();
  taskListArray.push({ _id: taskId, title: taskName.value, open: true });
  newTask.appendChild(newTaskTitle);

  // add new
  newTask.classList.add("task");
  newTask.setAttribute("data-id", taskId);

  // add task Icons
  let taskIconsContainer = document.createElement("div");
  taskIconsContainer.classList.add("iconsContainer");

  // add complete icon
  let completeIcon = document.createElement("i");
  completeIcon.classList.add(
    "bi",
    "bi-check-circle-fill",
    "completeIcon",
    "taskIcon"
  );
  completeIcon.addEventListener("click", handleCompleteTask);
  taskIconsContainer.append(completeIcon);

  // add delete icon
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("bi", "bi-trash-fill", "deleteIcon", "taskIcon");
  deleteIcon.addEventListener("click", handleDeleteTask);
  taskIconsContainer.append(deleteIcon);

  newTask.appendChild(taskIconsContainer);

  taskList.appendChild(newTask);

  // clear textinput
  handleClearInput();
  console.log(taskListArray);
}

const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleCreateTask();
  }
};

const initApp = () => {
  let taskName = document.getElementById("taskNameInput");
  taskName.addEventListener("keydown", handleKeyDown);
  const createButton = document.getElementById("createButton");
  createButton.addEventListener("click", handleCreateTask);
};

window.onload = initApp;