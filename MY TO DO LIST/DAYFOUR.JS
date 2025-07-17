const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
      const taskText = input.value.trim();
      if (taskText === '') return;

      const li = document.createElement('li');
      li.innerHTML = `<input type="checkbox" /> <span>${taskText}</span>`;
      taskList.appendChild(li);
      input.value = '';
    }

    function resetTasks() {
      taskList.innerHTML = '';
      input.value = '';
    }

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
      