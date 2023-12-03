import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './Blogs.css';

import blogData from './blogData.js';

const url = 'https://api.github.com/repos/royastik27/master-snake/contents/';

const url2 = 'https://raw.githubusercontent.com/royastik27/vpstore/main/package.json';

const arr = [
  <div key={1}>Hello FUCK1</div>,
  <div key={2}>Hello FUCK2</div>,
  <div key={3}>Hello FUCK3</div>
];

function AllBlogs() {

  const [ blogs, setBlogs ] = useState('Loading blogs...');

  useEffect(() => {
    // loading
  }, []);

  return (
    <>
      {blogs}
    </>
  );
}

function SingleBlog() {
  return (
    <p>Something</p>
  );
}

function Blogs() {

  useEffect(() => {
    // console.log('loading blog data');
  }, []);

  return (
    <div>
        <Routes>
            <Route index element={<AllBlogs />} />
            <Route path=":bid" element={<p>Suck only this blog</p>} />
            <Route path="*" element={<p>Maybe you've misspelled the URL or the corresponding blog is not available anymore</p>} />
        </Routes>

    </div>
  );
}

export default Blogs;