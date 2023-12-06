import { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import './Blogs.css';

import AllBlogsSingle from './AllBlogsSingle.js';
import BlogSingle from './BlogSingle.js';
import FetchError from './../../components/FetchError/FetchError.js';

const url = 'https://api.github.com/repos/royastik27/master-snake/contents/';
const url2 = 'https://raw.githubusercontent.com/royastik27/vpstore/main/package.json';
const url3 = 'https://iamkate.com/';

function AllBlogs() {

  const [ allBlogs, setAllBlogs ] = useState('Loading blogs...');

  useEffect(() => {

    async function fetchData () {

      try {
        const fetchRes = await fetch("http://localhost:3000/data/blogs/all.json");
        
        const allBlogsData = await fetchRes.json();
        
        const allBlogsEl = allBlogsData.map((element, idx) => {
          return (
            <AllBlogsSingle key={idx}
              title={element.title}
              author={element.author}
              tags={element.tags.map(el => ` #${el}`)}
              refID={element.ref}
              fvrt={false}
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
    <div id="all-blogs">
        {allBlogs}
    </div>
  );
}

function SingleBlog() {

  const { bid } = useParams();

  const [ blog, setBlog ] = useState('Loading...');

  useEffect(() => {

    async function getData() {
      
      try {
        const fetchRes = await fetch(`http://localhost:3000/data/blogs/${bid}.json`);

        const blogData = await fetchRes.json();

        setBlog(<BlogSingle
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
    <div id="single-blog">
      {blog}
    </div>
  );
}

function Blogs() {

  return (
    <div id="blogs">

      <div className="left">
        <Routes>
            <Route index element={<AllBlogs />} />
            <Route path=":bid" element={<SingleBlog />} />
            <Route path="*" element={<FetchError />} />
        </Routes>
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

export default Blogs;