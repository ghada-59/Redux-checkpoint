import { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

function ListTask() {
  const tasks = useSelector((state) => state.tasks.items)
  const [filter, setFilter] = useState('all')

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone
    if (filter === 'notDone') return !task.isDone
    return true
  })

  const completedCount = tasks.filter((task) => task.isDone).length

  return (
    <section className="list-section" aria-labelledby="tasks-heading">
      <div className="list-heading-row">
        <div>
          <h2 id="tasks-heading">Your tasks</h2>
          <p className="task-summary">
            {tasks.length === 0
              ? 'No tasks yet. Add your first task above.'
              : `${completedCount} of ${tasks.length} completed`}
          </p>
        </div>
        <div className="filters" role="group" aria-label="Filter tasks">
          <button className={filter === 'all' ? 'filter-button active' : 'filter-button'} onClick={() => setFilter('all')} type="button">All</button>
          <button className={filter === 'notDone' ? 'filter-button active' : 'filter-button'} onClick={() => setFilter('notDone')} type="button">Not done</button>
          <button className={filter === 'done' ? 'filter-button active' : 'filter-button'} onClick={() => setFilter('done')} type="button">Done</button>
        </div>
      </div>

      {filteredTasks.length > 0 ? (
        <ul className="task-list">
          {filteredTasks.map((task) => <Task key={task.id} task={task} />)}
        </ul>
      ) : (
        <div className="empty-state">
          <span className="empty-state-icon" aria-hidden="true">✓</span>
          <p>{tasks.length === 0 ? 'Your list is clear.' : 'No tasks match this filter.'}</p>
        </div>
      )}
    </section>
  )
}

export default ListTask
