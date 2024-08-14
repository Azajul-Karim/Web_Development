//DOM -> Document Object Model

document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('add-task');
  const newTaskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  addTaskBtn.addEventListener('click', () => {
      const taskText = newTaskInput.value.trim();
      if (taskText !== '') {
          const newTask = document.createElement('li');
          newTask.innerHTML = `${taskText} <button class="remove-task">Remove</button>`;
          taskList.appendChild(newTask);
          newTaskInput.value = '';

          newTask.querySelector('.remove-task').addEventListener('click', () => {
              taskList.removeChild(newTask);
          });
      }
  });
});
