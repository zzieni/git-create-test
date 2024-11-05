import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const counterReducer = useSelector((state) => {
    return state.counter;
  });
  console.log(counterReducer);
  return <></>;
}

export default App;
