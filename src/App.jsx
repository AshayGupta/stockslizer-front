import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar notifCount={3} />
      </div>
    </BrowserRouter>
  );
}

export default App;
