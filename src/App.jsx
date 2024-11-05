import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';

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
            dispatch({ type: 'PLUS_ONE' });
          }}
        >
          +1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'MIUSE_ONE' });
          }}
        >
          -1
        </button>
      </div>
    </>
  );
}

export default App;
