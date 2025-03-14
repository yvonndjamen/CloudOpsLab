const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const allowedOrigin = process.env.FRONTEND_URL || '*';

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization"
}));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const CourseController = require('./course/CourseController');
app.use('/courses', CourseController);

const AuthorController = require('./author/AuthorController');
app.use('/authors', AuthorController);

module.exports = app;