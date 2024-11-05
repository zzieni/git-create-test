// 초기 상태값
const initialState = {
  number: 0,
};

const PLUS_ONE = 'PLUS_ONE';

export const pulsOne = () => {
  return {
    type: PLUS_ONE,
  };
};

const MIUSE_ONE = 'MIUSE_ONE';

export const miuseOne = () => {
  return {
    type: MIUSE_ONE,
  };
};

// 리듀서
const counter = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'PLUS_ONE':
      return {
        number: state.number + 1,
      };
    case 'MIUSE_ONE':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
