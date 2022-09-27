### React-ThreeJs Weather App


![Animation](https://user-images.githubusercontent.com/99739515/191304833-6e9b8956-d9e2-4b84-8e01-f0928194b0b4.gif)


[⛅click here to see page](https://react-weather-app-sigma-silk.vercel.app)


## Problem Statement

- This project aims to create Weather App with Material UI and ThreeJs.


### At the end of the project, following topics are to be covered;
📌 ThreeJs

📌 React Globe

📌 Props and State Logic

📌 React Router Dom

📌 State Management with Context Api

📌 Conditional Rendering

📌 Async Await Function

📌 React Hooks (useState, useEffect, useRef, useNavigate, useParams ReactMemo)

📌 React AutoAnimate

📌 3rd Part Libraries ( Toastify, Axios, AutoAnimation )

📌 Styling with Material Ui and SASS

📌 Deployment with Vercel and Netlify

⛅ You can use [OpenWeather Api](https://openweathermap.org/) for your app to get apiKey

### How to add React Globe in your project;
 
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

