import Addtask from './components/Addtask'
import ListTask from './components/ListTask'

function App() {
  return (
    <main className="app-shell">
      <section className="todo-card">
        <header className="app-header">
          <div className="eyebrow">REACT + REDUX TOOLKIT</div>
          <h1>My ToDo List<span>.</span></h1>
          <p>One step at a time. Keep your tasks moving.</p>
        </header>

        <Addtask />
        <ListTask />

        <footer className="app-footer">Your tasks are managed with a global Redux store.</footer>
      </section>
    </main>
  )
}

export default App
