import React from 'react'

export default function Resources( resourceInfo: any ) {
  return (
  <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: 'fit-content', width: '80%', position: 'relative', marginTop: '15vh', marginLeft: '10%', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
    <text style={{color: 'yellow', fontSize: '2.5em'}}>RESOURCES</text>
    <br></br>
    <text style={{color: 'green', fontSize: '2em'}}>STORAGE</text>
    <br></br>
    <div style={{display: 'flex', flexDirection: 'row', height: 'fit-content', padding: '2.5%', width: '90%'}}>
      <div style={{width: '35%', height: 'fit-content', backgroundColor: 'black', padding: '1%', margin: '2%'}}>
        <text style={{color: "lightblue", fontSize: '1em'}}>FOOD</text>
        <br></br>
        {renderFoodItem(resourceInfo.storage.food)}
      </div>
      <div style={{width: '35%', height: 'fit-content', backgroundColor: 'black', padding: '1%', margin: '2%'}}>
        <text style={{color: "lightblue", fontSize: '1em'}}>WATER</text>
        <br></br>
        {renderWaterInfo(resourceInfo.storage.water)}
      </div>
    </div>
    <br></br>
    <text style={{color: 'green', fontSize: '2em'}}>ARMORY</text>
    <br></br>
    <div style={{display: 'flex', flexDirection: 'row', height: 'fit-content', padding: '2.5%', width: '90%'}}>
      <div style={{width: '35%', height: 'fit-content', backgroundColor: 'black', padding: '1%', margin: '2%'}}>
        <text style={{color: "lightblue", fontSize: '1em'}}>Weapons</text>
        <br></br>
        {renderWeaponInfo(resourceInfo.armory.weapons)}
      </div>
      <div style={{width: '35%', height: 'fit-content', backgroundColor: 'black', padding: '1%', margin: '2%'}}>
        <text style={{color: "lightblue", fontSize: '1em'}}>WATER</text>
        <br></br>
        {renderWaterInfo(resourceInfo.storage.water)}
      </div>
    </div>
  </div>
  );
}

function renderWeaponInfo( weaponInfo: any )
{
  return (
  <>
    {weaponInfo.map((elem: any) => {
      return (
      <>
      <text style={{color: "lightblue", fontSize: '1em'}}>{elem.type}-{elem.quantity}</text>
      <br></br>
      </>
      );
    })}
  </>
  );
}

function renderWaterInfo( waterInfo: any )
{
  return (
    <>
      <text style={{color: "lightblue", fontSize: '1em'}}> Source: {waterInfo.source}</text>
      <br></br>
      <text style={{color: "lightblue", fontSize: '1em'}}>Capacity: {waterInfo.capacity} {waterInfo.unit}</text>
    </>
  )
}

function renderFoodItem( food: any )
{
  return (
    <>
      <text style={{color: "lightblue", fontSize: '1em'}}>Type: {food.type}</text>
      <br></br>
      <text style={{color: "lightblue", fontSize: '1em'}}>Quantity: {food.quantity} {food.unit}</text>
    </>
  )
}
