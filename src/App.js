import "./App.css";
import Main from "./components/Main";
import Weather from "./context/Weather";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <Weather>
    <AppRouter />
    </Weather>
  );
}

export default App;
