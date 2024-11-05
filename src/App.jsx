import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import { miuseOne, pulsOne } from './redux/modules/counter';

function App() {
  const counterReducer = useSelector((state) => {
    return state.counter;
  });
  console.log(counterReducer);

  //  액션 객체를 리듀스한테 보낸는 역할은 한다.
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(pulsOne);
          }}
        >
          +1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(miuseOne);
          }}
        >
          -1
        </button>
      </div>
    </>
  );
}

export default App;
