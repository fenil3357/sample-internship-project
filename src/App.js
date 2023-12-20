import './App.css';
// Library used for routing in web page
import {Route, Routes} from 'react-router-dom'

// Importing Components
import Login from './components/login';
import Departments from './components/departments';
import Home from './components/home';

function App() {
  return (
    <div className="App">
    <Routes>
    {/* Setting up routes for different pages */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/departments' element={<Departments/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' element={<center><h2>Error 404 : Page Not Found!!!</h2></center>}/>
    </Routes>
    </div>
  );
}

export default App;
