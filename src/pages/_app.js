import React from 'react';
import { Routes,Route } from 'react-router-dom';
import NavBar from '../components/NavBar.js';

import Page1 from './page1.js';
import Page2 from './page2.js';


const App = () => {
    return (


        <div>
            <NavBar/>

            <Routes>               
                <Route path='/' element={<Page1/>}/>
                <Route path='page2' element={<Page2/>}/>
            </Routes>
        
            

            
        
        </div>


    );
}

export default App;
