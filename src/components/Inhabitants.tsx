import React from 'react'
import { useState } from 'react';

export default function Inhabitants( inhabitantsData: any ) {

  const [showSolsierInfo, setSoldierInfo] = useState(false);

  const [showMageInfo, setMageInfo] = useState(false);

  const [showVillagerInfo, setVillagerInfo] = useState(false);

  const renderSoldierInfo = ( soldierInfo: any )  => {
    if(showSolsierInfo)
    {
      return(
        <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: 'fit-content', width: '90%', position: 'relative', marginTop: '1vh', textAlign: 'center'}}>
          <text style={{color: 'white', fontSize: '1em'}}>EQUIPMENT</text>
          <br></br>
          <text style={{color: 'white', fontSize: '0.8em'}}>Weapon: {soldierInfo.equipment.weapon}</text>
          <br></br>
          <text style={{color: 'white', fontSize: '0.8em'}}>Armor: {soldierInfo.equipment.armor}</text>
          <br></br>
          <text style={{color: 'white', fontSize: '0.8em'}}>Shield: {soldierInfo.equipment.shield}</text>
        </div>
      );
    }

    return(<></>);
  
  }

  const renderVillagerInfo = ( villagerInfo: any ) => {

    if(showVillagerInfo)
    {
      return(
      <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: 'fit-content', width: '90%', position: 'relative', marginTop: '1vh', textAlign: 'center'}}>
        <text style={{color: 'white', fontSize: '1em'}}>PROFESSIONS</text>
        <br></br>
        {villagerInfo.professions.map((elem: any) => {
          return (
            <>
            <text style={{color: 'white', fontSize: '0.8em'}}>{elem.type}: {elem.count}</text>
            <br></br>
            </>
          )
        })}
      </div>
      )
    }

    return(<></>)
  }

  const renderMageInfo = ( mageInfo: any )  => {
    if(showMageInfo)
    {
      return(
        <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: 'fit-content', width: '90%', position: 'relative', marginTop: '1vh', textAlign: 'center'}}>
          <text style={{color: 'white', fontSize: '1em'}}>EQUIPMENT</text>
          <br></br>
          <text style={{color: 'white', fontSize: '0.8em'}}>Staff: {mageInfo.equipment.staff}</text>
          <br></br>
          <text style={{color: 'white', fontSize: '0.8em'}}>Robe: {mageInfo.equipment.robe}</text>
          <br></br>
          <text style={{color: 'white', fontSize: '0.8em'}}>Amulet: {mageInfo.equipment.amulet}</text>
        </div>
      );
    }

    return(<></>);
  
  }

  const countAllInhabitants = () => {
    const response = inhabitantsData.roles.reduce((accumulator: number, currentValue: any) => {
      let number = currentValue.count;
      if(number === null || number === undefined)
      {
        number = currentValue.professions.reduce( (acc: number, currentObj: any) => {
          console.log(acc)
          let num = currentObj.count;
          return acc + num;
        }, 0);
        console.log("enter: " + number)
      }
      return accumulator + number;
    }, 0);
    return response;
  };

  const inhabitantsNumber = countAllInhabitants();

  return (
    <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: 'fit-content', width: '80%', position: 'relative', marginTop: '1vh', marginLeft: '10%', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <text style={{color: 'yellow', fontSize: '2.5em'}}>INHABITANTS</text>
      <br></br>
      <text style={{color: 'white', fontSize: '2em'}}>TOTAL INHABITANTS: {inhabitantsNumber}</text>
      <button onClick={() => setSoldierInfo(!showSolsierInfo)}>Soldier</button>
      {renderSoldierInfo(inhabitantsData.roles.find((elem: any) => { return (elem.role === "Soldier") }))}
      <button onClick={() => setMageInfo(!showMageInfo)}>Mage</button>
      {renderMageInfo(inhabitantsData.roles.find((elem: any) => { return (elem.role === "Mage") }))}
      <button onClick={() => setVillagerInfo(!showVillagerInfo)}>Villager</button>
      {renderVillagerInfo(inhabitantsData.roles.find((elem: any) => { return (elem.role === "Villager") }))}
    </div>
  )
}


