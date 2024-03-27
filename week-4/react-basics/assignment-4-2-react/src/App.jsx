import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const addTodo = () => {
    setTodos([...todos, { title, description }]);
    setTitle('');
    setDescription('');
    setCount(count => count + 1);
  }


  return (
    <>
    <div id='heading'>
      <h2>Here is your todo app
      </h2>
      <h3>Add the todos to save and list your todos</h3>
    </div><br /><br />
      <div>
        <input type="text" value={title} onInput={handleTitleChange}  placeholder='title' /><br /><br />
        <input type="text" value={description} onInput={handleDescriptionChange} placeholder='description' />
      </div>
      <div className="card">
        <button onClick={addTodo}>
            Click to submit todo
        </button>
        <br /><br /><div id='count'> todo count is {count} </div><br /><br />
        <div >
        {todos.map((todo, index) => (
          <div id="todosRender" key={index}>
            <h5 id='todoNumber'>Todo: {index + 1}</h5>
            <h2>Todo title:{todo.title}</h2>
            <p ><strong id='description'>Description:</strong> <p id='docs'>{todo.description}</p></p>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default App
