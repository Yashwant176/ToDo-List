import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const Create = () => {
  const [task, setTask] = useState('')

  const handleAdd = () => {
    if (!task.trim()) return
    axios.post('http://localhost:3001/add', { task })
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="create-task">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="task-input"
      />
      <button type="button" onClick={handleAdd} className="add-button">
        Add
      </button>
    </div>
  )
}

export default Create
