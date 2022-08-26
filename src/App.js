import "./App.css";
import Main from "./components/Main";
import Weather from "./context/Weather";

function App() {
  return (
    <Weather>
      <Main />
    </Weather>
  );
}

export default App;
