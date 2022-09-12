import './App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Calender from './Calender';
import Projects from './Projects';
import Tasks from './Tasks';
import Dayplan from './Dayplan';
import Login from './Login';
import Createuser from './Createuser';
import Forgetpassword from './Forgetpassword';
import Remainder from './Taskdetails/Remainder';
function App() {
  return (
    <div className="App">
    <Header/>
    {/* Assigning Routes */}
      <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Calender" element={<Calender/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Tasks" element={<Tasks/>}/>
      <Route path="/Remainder" element={<Remainder/>}/>
      <Route path="/Dayplan" element={<Dayplan/>}/>
      <Route path="/Createuser" element={<Createuser/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Forgetpassword" element={<Forgetpassword/>}/>
    </Routes>
    </div>
  );
}

export default App;
