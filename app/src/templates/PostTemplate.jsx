import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  margin-left: 20px;
`;

const BlogContent = styled.div`
  margin: 20px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  padding: 8px;
  border: none;
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: red;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
`;

const PostTemplate = () => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000${window.location.pathname}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setBlog(res))
      .catch((err) => console.log(err));
  }, []);

  const deletePost = () => {
    const endpoint = `http://localhost:3000/blogs/${blog.blog._id}`;

    fetch(endpoint, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => (window.location.href = data.redirect))
      .catch((err) => console.log(err));
  };

  return (
    <Main>
      {blog ? (
        <React.Fragment>
          <h2>{blog.title}</h2>
          <BlogContent>
            <p>{blog.blog.body}</p>
            <DeleteButton onClick={deletePost}>
              <img src="http://localhost:3000/trashcan.svg" alt="delete icon" />
            </DeleteButton>
          </BlogContent>
        </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </Main>
  );
};

export default PostTemplate;
