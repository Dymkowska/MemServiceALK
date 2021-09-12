import Navigation from "./routing/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouting from "./routing/AppRouting/AppRouting";
import MemesContextProvider from "./context/MemesProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MemesContextProvider>
        <Router>
          <Navigation />
          <AppRouting />
        </Router>
      </MemesContextProvider>
    </div>
  );
}

export default App;
