import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/tasksSlice'

function Addtask() {
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const cleanDescription = description.trim()

    if (!cleanDescription) return

    dispatch(addTask(cleanDescription))
    setDescription('')
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="new-task">New task</label>
      <input
        id="new-task"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="What do you need to do?"
        maxLength={120}
      />
      <button className="primary-button" type="submit" disabled={!description.trim()}>
        Add task <span aria-hidden="true">+</span>
      </button>
    </form>
  )
}

export default Addtask
