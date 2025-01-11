const express = require('express');
const VideosControllers = require('./controllers/VideosControllers');
const ArtigosControllers = require('./controllers/ArtigosControllers')

const routes = express.Router();

// Rota de Videos

routes.get('/videos', VideosControllers.index);
routes.post('/videos', VideosControllers.store);
routes.get('/videos/:id', VideosControllers.show);
routes.delete('/videos/:id', VideosControllers.delete);
routes.put('/videos/:id', VideosControllers.update);
routes.post('/videos/:id/like', VideosControllers.like);
routes.post('/videos/:id/dislike', VideosControllers.dislike);
routes.post('/videos/:id/comment', VideosControllers.comment);
routes.get('/videos/:id/comments', VideosControllers.comments);

// Rota de Artigos

routes.get('/api/articles', ArtigosControllers.index);
routes.post('/api/articles', ArtigosControllers.store);
routes.get('/api/articles/:id', ArtigosControllers.show);
routes.delete('/api/articles/:id', ArtigosControllers.delete);
routes.put('/api/articles/:id', ArtigosControllers.update);
routes.patch('/api/articles/:id', ArtigosControllers.updateView);

module.exports = routes