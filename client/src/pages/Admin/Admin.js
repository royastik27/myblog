import { Routes, Route } from 'react-router-dom';

import AdminHome from './AdminHome/AdminHome.js';
import AdminBlogs from './AdminBlogs/AdminBlogs.js';
import FetchError from './../../components/FetchError/FetchError.js';

function Admin() {
    return (
        <div>
            <h4 className="mb-3">Welcome Astik Roy!</h4>

            <Routes>
                <Route index element={<AdminHome />} />
                <Route path="blogs/*" element={<AdminBlogs />} />
                <Route path="*" element={<FetchError />} />
            </Routes>
            
        </div>
    );
}

export default Admin;