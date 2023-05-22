import logo from './logo.svg';
import './App.css';
import User from "./Components/User";
import Butt from "./Components/Butt.jsx";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Employee } from "./Components/Employee";

const Profile = () => {
  return <h1>Profile Component</h1>
};

function App() {
  const clickme = () => alert("clicked");
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/emp">Employee</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <Routes>
            <Route path="/" element={<User name="Darshan" fun={clickme} />} />
            <Route path="/emp" element={<Employee />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Butt />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;