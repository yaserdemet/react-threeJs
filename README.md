<p align="center">React-ThreeJs Weather App</p>


![Animation](https://user-images.githubusercontent.com/99739515/191304833-6e9b8956-d9e2-4b84-8e01-f0928194b0b4.gif)


[βclick here to see detail of page](https://react-weather-app-sigma-silk.vercel.app)


## Problem Statement

- This project aims to create Weather App with Material UI and ThreeJs.


### At the end of the project, following topics are to be covered;
π ThreeJs

π React Globe

π Props and State Logic

π React Router Dom

π State Management with Context Api

π Conditional Rendering

π Async Await Function

π React Hooks (useState, useEffect, useRef, useNavigate, useParams ReactMemo)

π React AutoAnimate

π 3rd Part Libraries ( Toastify, Axios, AutoAnimation )

π Styling with Material Ui and SASS

π Deployment with Vercel and Netlify

β You can use [OpenWeather Api](https://openweathermap.org/) for your app to get apiKey

### How to add React Globe in your project;

#### Strongly adviced to use these versions
 
    "react-globe": "^5.0.2",
    "react-globe.gl": "^2.22.3",
    "three": "0.118.3"
#### In your component;
```
import ReactGlobe from "react-globe";

 <ReactGlobe
        height="100vh"
        animations={animations}
        width="100vw"
        markers={markers}
        options={{
          cameraAutoRotateSpeed: 1,
          cameraRotateSpeed: 0.5,
          enableCameraAutoRotate: true,
          enableCameraRotate: true,
          enableCameraZoom: true,
          cameraDistanceRadiusScale: 5,
          cameraMaxDistanceRadiusScale: 10,
          ambientLightColor: "grey",
          ambientLightIntensity: 1,
        }}
      />
      
```

