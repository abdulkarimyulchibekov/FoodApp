import { SideBar } from "./components/SideBar/SideBar";
import {Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home/Home";
import { Settings } from "./pages/Settings/Settings";
import { Dashboard } from "./pages/Dashboard/Dashboard";


function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<>main page</>}/>
        <Route path="/home/*" element={<Home/>}/>
        <Route path="/product" element={<>product page</>}/>
        <Route path="/data" element={<Dashboard />}/>
        <Route path="/email" element={<>email page</>}/>
        <Route path="/notifications" element={<>notifications page</>}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/logout" element={<>logout page</>}/>
      </Routes>
    </div>
  );
}

export default App;
