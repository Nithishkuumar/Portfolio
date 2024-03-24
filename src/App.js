import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Homescreen from './Screens/Homescreen';



function App() {
  return (
    <div className='App'>
       <Routes>
        <Route path='/' index="true" element={<Homescreen/>}></Route>
        <Route path="/home" Component={Homescreen}></Route>
       </Routes>
      
    </div>
  );
}

export default App;
