import { useState, type FormEvent } from 'react';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

const initialTasks: Task[] = [
  { id: 1, title: 'Подключить приложение к host', done: true },
  { id: 2, title: 'Настроить навигацию', done: true },
  { id: 3, title: 'Добавить свою бизнес-логику', done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const completedTasks = tasks.filter((task) => task.done).length;

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = newTask.trim();

    if (!title) return;

    setTasks((currentTasks) => [...currentTasks, { id: Date.now(), title, done: false }]);
    setNewTask('');
  }

  function toggleTask(taskId: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === taskId ? { ...task, done: !task.done } : task))
    );
  }

  return (
    <main className="app">
      <header className="app-header">
        <div>
          <div className="eyebrow">INDEPENDENT APPLICATION / REACT</div>
          <h1>React workspace</h1>
          <p>Самостоятельный React-проект в monorepo.</p>
        </div>
        <span className="badge">React 19 · Vite</span>
      </header>

      <section className="workspace">
        <div className="workspace-heading">
          <div>
            <span className="section-label">ВАША КОМАНДА</span>
            <h2>План запуска</h2>
          </div>
          <span className="task-count">
            {completedTasks}/{tasks.length} выполнено
          </span>
        </div>

        <div className="progress-track" aria-label="Прогресс выполнения">
          <span
            className="progress-value"
            style={{
              width: `${tasks.length ? (completedTasks / tasks.length) * 100 : 0}%`,
            }}
          />
        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li className="task-row" key={task.id}>
              <label className="task-label">
                <input checked={task.done} onChange={() => toggleTask(task.id)} type="checkbox" />
                <span className="custom-checkbox" />
                <span className={task.done ? 'task-done' : ''}>{task.title}</span>
              </label>
              <span className={`task-status ${task.done ? 'done' : ''}`}>
                {task.done ? 'Готово' : 'В работе'}
              </span>
            </li>
          ))}
        </ul>

        <form className="add-task-form" onSubmit={addTask}>
          <input
            aria-label="Новая задача"
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="Добавить задачу..."
            value={newTask}
          />
          <button type="submit">
            Добавить <span aria-hidden="true">+</span>
          </button>
        </form>
      </section>
    </main>
  );
}
