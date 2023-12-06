import { Routes, Route } from 'react-router-dom';

import './Content.css';

import Home from './../../pages/Home/Home.js';
import Blogs from './../../pages/Blogs/Blogs.js';
import Admin from './../../pages/Admin/Admin.js';
import Signup from './../../pages/Signup/Signup.js';
import Page404 from './../../pages/Page404/Page404.js';

function Content() {
  return (
    <div id="content" className="m-3">
        
        <Routes>
            <Route index element={<Home />} />
            <Route path="/blogs/*" element={<Blogs />} />
            <Route path="/admin/*" element={<Admin />} />          
            <Route path="/signup" element={<Signup />} />          
            <Route path="*" element={<Page404 />} />
        </Routes>
    </div>
  );
}

export default Content;
