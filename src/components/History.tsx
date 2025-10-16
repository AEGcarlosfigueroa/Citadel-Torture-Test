import React, { useState } from 'react'

export default function History( historyInfo: any ) 
{
  const eventsArray = historyInfo.majorEvents;

  const [currentOption, setCurrentOption] = useState("default");

  const handleOptionChange = (option: any) => {
    console.log(option);
    setCurrentOption(option);
  }

  const renderCurrentOption = () => {
    const currentEvent = eventsArray.find( (elem: any) => { return(elem.year === currentOption) } );
    console.log(currentEvent);
    if(!currentEvent)
    {
      return <text> </text>;
    }

    return (
      <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: 'fit-content', width: '80%', position: 'relative', marginTop: '1vh', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <text style={{color: 'lightgreen', fontSize: '2em'}}>{currentEvent.event}</text>
      <br></br>
      <text style={{color: 'blue', fontSize: '2em'}}>Outcome: {currentEvent.outcome}</text>
      <br></br>
      <text style={{color: 'lightblue', fontSize: '1em'}}>{currentEvent.description}</text>
      </div>
    )
  }

  return(
  <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: '50%', width: '80%', position: 'relative', marginTop: '15vh', marginLeft: '10%', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
    <text style={{color: 'yellow', fontSize: '2.5em'}}>HISTORY</text>
    <text style={{color: 'yellow', fontSize: '2.5em'}}>FOUNDED IN {historyInfo.founded.year} BY {historyInfo.founded.by}</text>

    <label htmlFor='selector'>Choose a year:</label>
    <select name="selector" defaultValue="default">
      <option value="default" onClick={() => handleOptionChange("default")}>No Year Selected</option>
      {eventsArray.map((elem: any) => { return ( <option onClick={() => handleOptionChange(elem.year)} value={elem.year}>{elem.year}</option> ) })}
    </select>
    {renderCurrentOption()}
  </div>
  );
}
