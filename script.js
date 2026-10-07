function searchTasks() {
  const input = document.getElementById('taskSearch').value.toLowerCase();
  const tasks = document.querySelectorAll('.task-item');
  
  tasks.forEach(task => {
    const text = task.textContent.toLowerCase();
    task.style.display = text.includes(input) ? '' : 'none';
  });
}