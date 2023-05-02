import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applications from './components/Applications';
import Home from "./components/Home";
import Layout from './components/Layout';
import Projects from "./components/Projects";
import Events from "./components/Events";
import Blog from "./components/Blog";

function App(){
    return <div>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout /> }>
            <Route index element={<Home />} />
            <Route path="applications" element={<Applications />} />
            <Route path="projects" element={<Projects />} />
            <Route path="events" element={<Events />} />
            <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
        
    </div>
} 

export default App;
