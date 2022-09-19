import React from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

function Globe() {
    const markers = [
        {
          id: 'marker1',
          city: 'Singapore',
      
          coordinates: [1.3521, 103.8198],
          value: 50,
        },
        {
          id: 'marker2',
          city: 'New York',
      
          coordinates: [40.73061, -73.935242],
          value: 25,
        },
        {
          id: 'marker3',
          city: 'San Francisco',
          color: 'orange',
          coordinates: [37.773972, -122.431297],
          value: 35,
        },
        {
          id: 'marker4',
          city: 'Beijing',
         
          coordinates: [39.9042, 116.4074],
          value: 135,
        },
        {
          id: 'marker5',
          city: 'London',
        
          coordinates: [51.5074, 0.1278],
          value: 80,
        },

      ];
  return(
  <div>
  <ReactGlobe height="30vh" width="30vw" 
  globeBackgroundTexture="https://your/own/background.jpg"
  markers={markers}
  options={{
    cameraAutoRotateSpeed: 2,
    cameraMaxPolarAngle: (Math.PI * 9) / 16,
    cameraMinPolarAngle: (Math.PI * 7) / 16,
    cameraRotateSpeed: 0.5,
    enableCameraAutoRotate: true,
    enableCameraRotate: true,
    enableCameraZoom: true,
    
    cameraDistanceRadiusScale: 5,
    cameraMaxDistanceRadiusScale: 10,
    ambientLightColor: 'grey',
    ambientLightIntensity: 1,

  }}
  
  
  
  />
  </div>
  )
}

export default Globe