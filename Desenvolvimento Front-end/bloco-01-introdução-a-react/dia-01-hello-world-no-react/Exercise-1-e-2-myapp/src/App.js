import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = [
  'Have breakfast', 'study css', 'study javascript', 'have lunch', 'study react', 
  'study english'
]


function App() {
  return (
    <div>
      <h1>My Tasks</h1>
      <ol>{tasks.map((task => Task(task)))}</ol>
    </div>
  );
}

export default App;
