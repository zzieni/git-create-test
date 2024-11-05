import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import { addNumber, removeNumber } from './redux/modules/counter';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const counterReducer = useSelector((state) => {
    return state.counter;
  });
  console.log(counterReducer);

  //  액션 객체를 리듀스한테 보낸는 역할은 한다.
  const dispatch = useDispatch();

  return (
    <>
      {counterReducer.number}
      <div>
        <br />
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addNumber(count));
          }}
        >
          더하기
        </button>

        <button
          onClick={() => {
            dispatch(removeNumber(count));
          }}
        >
          뺴기
        </button>
      </div>
    </>
  );
}

export default App;
