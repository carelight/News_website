import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

import LoadingBar from 'react-top-loading-bar'


import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
            <Route path='/' element={<News key='general' pageSize={12} country='in' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={12} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={12} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={12} country='in' category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={12} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={12} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={12} country='in' category='technology' />}></Route>
            <Route path='/us' element={<News key='us' pageSize={12} country='us' category='general'/>}></Route>
            <Route path='/rs' element={<News key='rs' pageSize={12} country='rs' category='general'/>}></Route>
          
    </Routes>
    </BrowserRouter>
   
    <News pageSize={5} country="in" category="science"/>

    
    </>
  );
}

export default App;
