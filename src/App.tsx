import React, { useState } from 'react';
import Data from "./../public/citadel.json";
import Defenses from './components/Defenses';
import History from './components/History';
import Inhabitants from './components/Inhabitants';
import Location from './components/Location';
import Resources from './components/Resources';

function App() {
  const [data, setData] = useState(Data);
  const [currentTab, setCurrentTab] = useState(0);

  const renderCurrentTab = () => {
    switch(currentTab)
    {
      case 0:
        return (<Defenses/>)
      
      case 1:
        return(<History/>)

      case 2:
        return (<Inhabitants/>)
      
      case 3:
        return(<Location/>) 
      
      case 4:
        return(<Resources/>)

      default:
        return(<></>)  
    }
  }

  return (
    <div>
      <div style={{flex: 1, flexDirection: 'row', alignItems: 'center', width: '100%', height: '20%', backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <button style={{backgroundColor: 'black', height: '8%', width: '12%', color: 'white'}} onClick={() => setCurrentTab(0)}>Defenses</button>
        <button style={{backgroundColor: 'black', height: '8%', width: '12%', color: 'white'}} onClick={() => setCurrentTab(1)}>History</button>
        <button style={{backgroundColor: 'black', height: '8%', width: '12%', color: 'white'}} onClick={() => setCurrentTab(2)}>Inhabitants</button>
        <button style={{backgroundColor: 'black', height: '8%', width: '12%', color: 'white'}} onClick={() => setCurrentTab(3)}>Location</button>
        <button style={{backgroundColor: 'black', height: '8%', width: '12%', color: 'white'}} onClick={() => setCurrentTab(4)}>Resources</button>
      </div>
      {renderCurrentTab()}
    </div>
  )
}


export default App
