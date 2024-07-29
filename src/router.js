const express = require('express');
const VideosControllers = require('./controllers/VideosControllers');

const routes = express.Router();


routes.get('/videos', VideosControllers.index);
routes.post('/videos', VideosControllers.store);
routes.get('/videos/:id', VideosControllers.show);
routes.delete('/videos/:id', VideosControllers.delete);
routes.put('/videos/:id', VideosControllers.update);
routes.post('/videos/:id/like', VideosControllers.like);
routes.post('/videos/:id/dislike', VideosControllers.dislike);
routes.post('/videos/:id/comment', VideosControllers.comment);
routes.get('/videos/:id/comments', VideosControllers.comments);

module.exports = routes