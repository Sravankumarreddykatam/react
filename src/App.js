
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/categories';
import Navbar from "./components/navbar"
import Videos from './components/videos';
import AddVideo from './components/addvideo';


function App()
{


  return (
    <div className="App">

 
 <BrowserRouter>
 <Navbar/>
<Categories/>
<Routes>
<Route element={<AddVideo/>}  path='/addvideo'/>
<Route element={<Videos/>} path='/'/>
</Routes>
 </BrowserRouter> 
 







    </div>
  );
}

export default App;
