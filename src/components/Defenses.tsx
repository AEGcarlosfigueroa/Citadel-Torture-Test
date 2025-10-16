import React from 'react'

export default function Defenses( defenseInfo: any ) {
  return (
    <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: 'fit-content', width: '80%', position: 'relative', marginTop: '1vh', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', marginLeft: '10%'}}>
      <text style={{color: 'yellow', fontSize: '2.5em'}}>DEFENSES</text>
      <text style={{color: 'lightblue', fontSize: '2em'}}>WALLS</text>
      <text style={{color: 'white', fontSize: '1.5em'}}>MATERIAL: {defenseInfo.walls.material}</text>
      <text style={{color: 'white', fontSize: '1.5em'}}>HEIGHT: {defenseInfo.walls.height}m</text>
      <text style={{color: 'lightblue', fontSize: '2em'}}>ENCHANTMENTS</text>
      {defenseInfo.walls.enchantments.map((elem: any) => {
        return <text style={{color: 'white', fontSize: '1.5em'}}>{elem.name} LEVEL: {elem.level}</text>
      })}
      <text style={{color: 'lightblue', fontSize: '2em'}}>TOWERS</text>
      {defenseInfo.towers.map((elem: any) => {
        return (<text style={{color: 'white', fontSize: '1.5em'}}>{elem.name} HEIGHT: {elem.height}</text>);
      })}
    </div>
  );
}
