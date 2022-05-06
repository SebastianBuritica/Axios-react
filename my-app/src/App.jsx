
import './App.css';
import axios, { Axios } from 'axios';



function App() {

  const getApi = () => {
    Axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
      console.log(response)
    })
  }

  return (
    <div>
      <h1>Hello Youtube</h1>
    </div>
  );
}

export default App;
