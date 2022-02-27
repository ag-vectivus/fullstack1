const { send } = require('process');
const Blog = require('../models/Blog');

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send({ blogs: result });
    })
    .catch((err) => send(err.message));
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => res.send({ blog: result, title: 'Blog Details' }))
    .catch((err) => send(err.message));
};

const blog_create_get = (req, res) => {
  res.send({ title: 'Create a new Blog' });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  const origin = req.header('Origin');

  blog
    .save()
    .then((result) => res.redirect(origin))
    .catch((err) => send(err.message));
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/' });
    })
    .catch((err) => send(err.message));
};

module.exports = {
  blog_index,
  blog_create_post,
  blog_create_get,
  blog_details,
  blog_delete,
};
