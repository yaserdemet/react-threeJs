import "./App.css";
import Main from "./components/Main";
import { useEffect , useState } from "react";
import Weather from "./context/Weather";
import AppRouter from "./Router/AppRouter";



function App() {
  const [loading , setLoading] = useState(false)


  useEffect(() => {

    setTimeout(() => {
        setLoading(true)
    },2000)
  
  }, [])

  return (
    <Weather>

      {
        loading  ? 
        <AppRouter /> : <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif" width="100%" height="100%"/>
   
      }
    </Weather>
  );
}

export default App;
