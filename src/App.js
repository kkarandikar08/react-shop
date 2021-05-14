import React from "react";
import { useSelector } from "react-redux";


import './App.css';
import Layout from "./components/Layout/Layout";

function App() {
  const state = useSelector(state => state);
  console.log(state);
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
