import './App.css';
import Login from './features/auth/Login';
import Counter from './features/counter/Counter';

function App() {
  return (
   <>
    <div>
      <h1>Redux Assignment</h1>
      <Login />
      <Counter />
    </div>
   </>
  );
}

export default App;
