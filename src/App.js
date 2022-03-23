import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
//import HeadLines from './components/buttonComponents';
import LOGIN from './actions/login';
import Form from './features/counter/form';
import { addToList, removeFromList } from "./actions/listActions"
import DisplayCard from "./components/displayCard"
import store from "./store"
import { imageSaga } from './saga/listImgSaga'
import listActionTypes from './actionTypes/listActionTypes'
import { useSelector } from 'react-redux'

const addElementToList = () => {
  store.dispatch({type: listActionTypes.FETCH_DATA})
}

const removeElementToList = () => {
  store.dispatch(removeFromList())
}

const getList = state => state.listReducer.list

function App() {
  const list = useSelector(getList)
  return (
    <div className="App">
      <button onClick={()=>addElementToList()}>Add</button>
      <button onClick={()=>removeElementToList()}>Delete</button> 
      {list.reverse().map(i => <div key={i.key}><DisplayCard name={i.name} url={i.image_url}/></div>)}
    </div>
  );
}

export default App;
