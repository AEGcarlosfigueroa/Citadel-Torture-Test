import React from 'react'

export default function Location( location: any ) {

  const locationInfo = location.location;

  const landmarks = locationInfo.nearbyLandmarks.sort( compareLandmarkDistance )
  return (
  <div style={{backgroundColor: 'rgba(0,0,0,0.5)', height: 'fit-content', width: '80%', position: 'relative', marginTop: '15vh', marginLeft: '10%', textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
    <text style={{color: 'yellow', fontSize: '2.5em'}}>{location.name}</text>
    <br></br>
    <text style={{color: 'lightblue', fontSize: '1.5em'}}>Continent: {locationInfo.continent}</text>
    <br></br>
    <text style={{color: 'lightblue', fontSize: '1.5em'}}>Coordinates: {locationInfo.coordinates.latitude}° , {locationInfo.coordinates.longitude}°</text>
    <br></br>
    <text style={{color: 'lightblue', fontSize: '1.5em'}}>Nearby Landmarks:</text>
    {landmarks.map( (elem: any) => renderLandmark(elem))}
  </div>
  );
}

function compareLandmarkDistance( a: any, b: any )
{
  if( a.distance < b.distance )
  {
    return -1;
  }
  if( b.distance < a.distance )
  {
    return 1;
  }

  return 0;
}

function renderLandmark( landmark: any )
{
  return(
    <div style={{ width: '75%', margin: '1%', padding: '1%', backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'row' }}>
      <div style={{width: '33%'}}>
        <text style={{color: 'lightblue', fontSize: '1.5em'}}> {landmark.name} </text>
      </div>
       <div style={{width: '33%'}}>
         <text style={{color: 'lightblue', fontSize: '1.5em', textAlign: 'center'}}> {landmark.type} </text>
      </div>
      <div style={{width: '33%'}}>
        <text style={{color: 'lightblue', fontSize: '1.5em', textAlign: 'end'}}> {landmark.distance} </text>
      </div>
    </div>
  )
}
