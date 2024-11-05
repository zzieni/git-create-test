// 초기 상태값
const initialState = {
  number: 0,
};

// payload
const ADD_NUMBER = 'ADD_NUMBER';
const REMOVE_NUMBER = 'REMOVE_NUMBER';

// Action Creator

export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload: payload,
  };
};

export const removeNumber = (payload) => {
  return {
    type: REMOVE_NUMBER,
    payload: payload,
  };
};
// 리듀서
const counter = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'ADD_NUMBER':
      return {
        number: state.number + action.payload,
      };
    case 'REMOVE_NUMBER':
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
