import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import Post from './Components/Posts/Post';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Post />
    </div>
  );
}

export default App;

