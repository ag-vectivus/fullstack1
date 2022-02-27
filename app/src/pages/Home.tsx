import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ISingleBlog from '../interfaces/ISingleBlog';

const Main = styled.main`
  margin-left: 20px;
`;
const BlogCard = styled.div`
  margin: 40px 0;
  padding-left: 30px;
  border-left: 6px solid crimson;
`;
const BlogTitle = styled.h3`
  &:hover {
    color: crimson;
  }
`;

const Home: React.FC = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/`)
      .then((res) => res.json())
      .then((res) => setBlogList(res.blogs))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Main>
      <h2>All Blogs</h2>
      {blogList.length ? (
        blogList.map((blog: ISingleBlog) => {
          return (
            <BlogCard key={blog._id}>
              <Link to={`/blogs/${blog._id}`}>
                <BlogTitle>{blog.title}</BlogTitle>
                <p>{blog.snippet}</p>
              </Link>
            </BlogCard>
          );
        })
      ) : (
        <p>There are no blogs to display...</p>
      )}
    </Main>
  );
};

export default Home;
