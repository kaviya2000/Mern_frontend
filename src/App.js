import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Book from './Components/Book'
import Title from './Components/Title'
import Design from './Components/Design'
import Content from './Components/Content'
import Index from './Components/Index'
import  {Header} from './Components/Header'
import { Footer1 } from './Components/Footer1'
import ToDoList from './Components/ToDoList'




const App = () => {
  return (
    <div>
      
        <Router>
        < Header/>
      
         <Routes>
           <Route path='/' element={<Design/>}/>
          <Route path='/test' element={<Title/>}/>
          <Route path='/contact' element={<Content/>}/>
          <Route path='/todo' element={<ToDoList/>}/>

           


         </Routes>
        </Router>
        <Footer1/>
    </div>
  )
}

export default App


