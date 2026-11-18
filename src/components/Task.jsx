import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask, toggleTask } from '../features/tasks/tasksSlice'

function Task({ task }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editedDescription, setEditedDescription] = useState(task.description)

  const handleSave = (event) => {
    event.preventDefault()
    const cleanDescription = editedDescription.trim()

    if (!cleanDescription) return

    dispatch(editTask({ id: task.id, description: cleanDescription }))
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedDescription(task.description)
    setIsEditing(false)
  }

  return (
    <li className={`task-item ${task.isDone ? 'task-item--done' : ''}`}>
      <label className="task-check" title={task.isDone ? 'Mark as not done' : 'Mark as done'}>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleTask(task.id))}
          aria-label={`Mark ${task.description} as ${task.isDone ? 'not done' : 'done'}`}
        />
        <span className="custom-checkbox" aria-hidden="true" />
      </label>

      {isEditing ? (
        <form className="edit-form" onSubmit={handleSave}>
          <label className="sr-only" htmlFor={`edit-${task.id}`}>Edit task</label>
          <input
            id={`edit-${task.id}`}
            autoFocus
            value={editedDescription}
            onChange={(event) => setEditedDescription(event.target.value)}
            maxLength={120}
          />
          <button className="small-button save-button" type="submit" disabled={!editedDescription.trim()}>
            Save
          </button>
          <button className="small-button muted-button" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span className="task-description">{task.description}</span>
          <div className="task-actions">
            <button
              className="icon-button"
              type="button"
              onClick={() => {
                setEditedDescription(task.description)
                setIsEditing(true)
              }}
              aria-label={`Edit ${task.description}`}
              title="Edit task"
            >
              Edit
            </button>
            <button
              className="icon-button delete-button"
              type="button"
              onClick={() => dispatch(deleteTask(task.id))}
              aria-label={`Delete ${task.description}`}
              title="Delete task"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default Task
