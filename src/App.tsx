import React, { useState } from 'react';
import Data from "./../public/citadel.json";
import Defenses from './components/Defenses';
import History from './components/History';
import Inhabitants from './components/Inhabitants';
import Location from './components/Location';
import Resources from './components/Resources';
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";
import { useNavigate } from 'react-router';

function App() {
  const [data, setData] = useState(Data);

  let navigate = useNavigate();

  const setCurrentTab = (i: number) => []

  return (
    <div>
      <div style={{flex: 1, flexDirection: 'row', alignItems: 'center', width: '100%', height: '20%', backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <button style={{backgroundColor: 'black', height: '8%', width: '12%', color: 'white'}} onClick={() => setCurrentTab(0)}>Defenses</button>
        <button style={{backgroundColor: 'black', height: '8%', width: '12%', color: 'white'}} onClick={() => navigate("/")}>History</button>
        <button style={{backgroundColor: 'black', height: '8%', width: '12%', color: 'white'}} onClick={() => navigate("/inhabitants")}>Inhabitants</button>
        <button style={{backgroundColor: 'black', height: '8%', width: '12%', color: 'white'}} onClick={() => navigate("/location")}>Location</button>
        <button style={{backgroundColor: 'black', height: '8%', width: '12%', color: 'white'}} onClick={() => navigate("/resources")}>Resources</button>
      </div>
      <Routes>
        <Route path={"/"} element={History(data.history)}/>
        <Route path={"/location"} element={Location(data)}/>
        <Route path={"/resources"} element={Resources(data.resources)}/>
        <Route path={"/inhabitants"} element={Inhabitants(data.inhabitants)}/>
      </Routes>
    </div>
    
  )
}


export default App
