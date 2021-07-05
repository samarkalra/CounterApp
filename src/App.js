import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counterReducer';
import Counter from './components/Counter';

const store = createStore(
  counterReducer
);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;