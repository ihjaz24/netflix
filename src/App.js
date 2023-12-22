import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import Post from './Components/Posts/Post';
import {originals,action} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Post  title='Netflix Originals' urls={originals}/>
      <Post  title='Action' isSmall urls={action}/>
    </div>
  );
}

export default App;

