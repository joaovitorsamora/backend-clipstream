const Video = require('../models/Video');

module.exports = {

    async indexAll(req, res) { 
        try {
            console.log('Servidor rodando ...');
            res.status(200).send(videos)
        } catch (error) {
            return res.status(500).send('Ocorreu um erro no servidor');
        }
    },

    async index(req, res) {

        try {
            const videos = await Video.findAll();
            if (!videos) {
                return res.status(404).send({ message: 'Nenhum video encontrado!' });
            }
            res.status(200).send(videos)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },

    async store(req, res) {
        try {
            const { title, url, description } = req.body
            const video = await Video.create({
                title,
                url,
                description
            });
            res.status(201).send({ message: 'Video adicionado com sucesso!', video});
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },

    async show(req, res) {
        try {
            const video = await Video.findByPk(req.params.id)
    
            if (video) {
                res.status(200).send(video);
            } else {
                res.status(404).send({ message: 'Video não encontrado' })
            }
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    async update(req, res) {
        try {
            const updated = await Video.update(req.body, {
                where: { id: req.params.id }
            })
            if (updated) {
                const updatedVideo = await Video.findByPk(req.params.id)
                res.status(200).send(updatedVideo)
            } else {
                res.status(404).send({ message: 'Video não foi atualizado!' })
            }
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    
    async delete(req, res) {
        try {
            const deleted = await Video.delete(req.params.id)
            if (deleted) {
                const deletedVideo = await Video.findByPk(req.params.id)
                res.status(200).send(deletedVideo)
            } else {
                res.status(404).send({ message: 'Video não foi deletado!' })
            }
        } catch (error) {
            res.status(500).send({ message: error.message })            
        }
    },

    async like(req, res) {
        try {
            const video = await Video.findByPk(req.params.id)
            if (video) {
                video.likes += 1
                await video.save()
                res.status(200).send(video)
            } else {
                res.status(404).send({ message: 'Video não encontrado' })
            }
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    
    async dislike(req, res) {
        try {
            const video = await Video.findByPk(req.params.id)
            if (video) {
                video.dislikes += 1
                await video.save()
                res.status(200).send(video)
            } else {
                res.status(404).send({ message: 'Video não encontrado' })
            }
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },


    async comment(req, res) {
        try {
            const video = await Video.findByPk(req.params.id);
            if (video) {
                const newComment = { content: req.body.content };
                video.comments.push(newComment);
                video.changed('comments', true);
                await video.save();
                const updatedComments = video.comments;
                res.json({
                    data: {
                        comment: newComment.content,
                        comments: updatedComments
                    }
                });
            } else {
                res.status(404).send({ message: 'Video não encontrado' });
            }
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    async comments(req, res) {
        try {
            const video = await Video.findByPk(req.params.id)
            if (video) {
                res.json({ comments: video.comments })
            } else {
                res.status(404).send({ message: 'Video não encontrado' })
            }
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}