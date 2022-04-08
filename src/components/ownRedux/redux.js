export default function createStore(reducer, initialState) {
  let currentReducer = reducer;
  let currentState = initialState;
  let listener = () => {};

  return {
    getState: () => currentState,
    dispatch: action => {
      currentState = currentReducer(currentState, action);
      listener();
      return action;
    },
    subscribe: newListener => listener = newListener
  }
}
