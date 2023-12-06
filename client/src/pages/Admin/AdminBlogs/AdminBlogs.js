import { useState, useEffect } from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';

import './AdminBlogs.css';

import AdminAllBlogsSingle from './AdminAllBlogsSingle.js';
import AdminBlogSingle from './AdminBlogSingle.js';
import CreateBlog from './CreateBlog.js';
import FetchError from './../../../components/FetchError/FetchError.js';

function AdminAllBlogs() {

    const [ allBlogs, setAllBlogs ] = useState('Loading blogs...');

    useEffect(() => {

    async function fetchData () {

        try {
            const fetchRes = await fetch("http://localhost:3000/data/blogs/all.json");
            
            const allBlogsData = await fetchRes.json();
            
            const allBlogsEl = allBlogsData.map((element, idx) => {
                return (
                    <AdminAllBlogsSingle key={idx}
                        title={element.title}
                        author={element.author}
                        tags={element.tags.map(el => ` #${el}`)}
                        refID={element.ref}
                    />
                );
            });

            setAllBlogs(allBlogsEl);
        }
        catch(err) {
            setAllBlogs(<FetchError />);
        }
    }

    fetchData();

    }, []);

    return (
        <div id="admin-all-blogs">
            <h4>All blogs</h4>
            <hr />
                  
            {allBlogs}            
        </div>
    );
}

function AdminSingleBlog() {

    const { bid } = useParams();

    const [ blog, setBlog ] = useState('Loading...');

    useEffect(() => {

    async function getData() {
        
        try {
            const fetchRes = await fetch(`http://localhost:3000/data/blogs/${bid}.json`);

            const blogData = await fetchRes.json();

            setBlog(<AdminBlogSingle
                title={blogData.title}
                author={blogData.author}
                content={blogData.content}
                tags={blogData.tags}
            />);
        }
        catch(err) {
            setBlog(<FetchError />);
        }
    }

    getData();

    }, []);

    return (
        <div id="admin-single-blog">
            {blog}
        </div>
    );
}

function AdminBlogs() {
    return (
        <div id="admin-blogs">
            <div className="left">
                <Routes>
                    <Route index element={<AdminAllBlogs />} />
                    <Route path=":bid" element={<AdminSingleBlog />} />
                    <Route path="create" element={<CreateBlog />} />
                    <Route path="*" element={<FetchError />} />
                </Routes>
            </div>

            <div className="right">
                <div className="card">
                    <div className="card-header">
                        Blogs
                    </div>
                    <div className="card-body">
                        <Link to="/admin/blogs/create">Create Blog</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminBlogs;