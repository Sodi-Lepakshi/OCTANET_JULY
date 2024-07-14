document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✔️';
        completeBtn.classList.add('complete');
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        li.appendChild(completeBtn);

        const editBtn = document.createElement('button');
        editBtn.textContent = '✏️';
        editBtn.classList.add('edit');
        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit your task:', span.textContent);
            if (newTaskText) {
                span.textContent = newTaskText;
            }
        });
        li.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);

        return li;
    }

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
