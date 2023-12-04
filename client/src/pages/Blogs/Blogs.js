import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './Blogs.css';

import AllBlogsSingle from './AllBlogsSingle.js';

const url = 'https://api.github.com/repos/royastik27/master-snake/contents/';
const url2 = 'https://raw.githubusercontent.com/royastik27/vpstore/main/package.json';
const url3 = 'https://iamkate.com/';

function AllBlogs() {

  const [ allBlogs, setAllBlogs ] = useState('Loading blogs...');

  useEffect(() => {

    async function fetchData () {
      const fetchRes = await fetch("http://localhost:3000/data/blogs/all.json");
      
      const allBlogsData = await fetchRes.json();
      
      const allBlogsEl = allBlogsData.map((element, idx) => {
        return (
          <AllBlogsSingle key={idx}
            title={element.title}
            author={element.author}
            tags={element.tags.map(el => ` #${el}`)}
            fvrt={false}
          />
        );
      });

      setAllBlogs(allBlogsEl);
    }

    fetchData();

  }, []);

  return (
    <div id="all-blogs">

      <div className="left">
        {allBlogs}
      </div>

      <div className="right">
        <div className="card">
          <div className="card-header">
            Last Updates
          </div>
          <div className="card-body">
            <p className="card-text">Click Here</p>
          </div>
        </div>
      </div>

    </div>
  );
}

function SingleBlog() {
  return (
    <p>Something</p>
  );
}

function Blogs() {

  return (
    <Routes>
        <Route index element={<AllBlogs />} />
        <Route path=":bid" element={<p>Suck only this blog</p>} />
        <Route path="*" element={<p>Maybe you've misspelled the URL or the corresponding blog is not available anymore</p>} />
    </Routes>
  );
}

export default Blogs;