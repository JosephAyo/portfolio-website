import "./App.scss";
import Main from "./pages/Main/Main";
import { DisplayContextProvider } from "./context/DisplayContext";

function App() {
  return (
    <DisplayContextProvider>
      <div className="App">
          <Main />
      </div>
    </DisplayContextProvider>
  );
}

export default App;
