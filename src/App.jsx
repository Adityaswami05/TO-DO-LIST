import ToDoList from "./toDoList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">My Tasks</h1>
        <p className="app-subtitle">Organize your day efficiently</p>
      </header>
      <main>
        <ToDoList />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Task Manager App</p>
      </footer>
    </div>
  );
}

export default App;
