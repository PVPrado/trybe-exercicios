// import logo from './logo.svg';
import './App.css';

const newArray = [1, 2, 3, 4, 5];


const Task = (value) => {
  return (
    newArray.map((numero, index) => {
      return (
      <li key={index}>
        {numero}: {value}
        </li>
      )
  }) 
  );
}

function App() {
  return (
    Task('Hello world!!')
    );
}

export default App;
