import React from 'react';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './App.css';
import Counter from './Components/Counter'
import Exam from './Components/Exam'
import Song from './Components/Song'
import { numberReducer } from './Reducers/counterReducer'
import { examReducer } from './Reducers/examReducer'
import { songReducer } from './Reducers/songReducer'

export const rootReducer = combineReducers({ number: numberReducer, songsData: songReducer })
export const store = createStore(rootReducer, applyMiddleware(logger, thunk))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Redux MyApp</h1>
      </header>
      <Provider store={store}>
        <Counter /><br/>
        <Song /><br/>
      </Provider>
      <header className="App-header">
        <br />
        <h3>Developer</h3>
        <h5>Name: Mr.Jatupat Pannoi</h5>
        <h5>ID : 5735512002</h5>
        <h5>Section : 02</h5>
        <br />
      </header>
    </div>
  );
}

export default App;
