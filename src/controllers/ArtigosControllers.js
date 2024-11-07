const Artigo = require('../models/Artigo')

module.exports = {

    async index(req, res) {

        try {
            const artigos = await Artigo.findAll();
            if (!artigos) {
                return res.status(404).send({ message: 'Nenhum artigo encontrado!' });
            }
            res.status(200).send(artigos)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },

    async store(req, res) {
        try {
            const { url, title, description, image, site } = req.body
            const artigo = await Artigo.create({
                title,
                url,
                description,
                site,
                image
            })
            res.status(201).send({ message: 'Artigo adicionado com sucesso!', artigo });
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },

    async show(req, res) {
        try {
            const artigo = await Artigo.findByPk(req.params.id)
    
            if (artigo) {
                res.status(200).send(artigo);
            } else {
                res.status(404).send({ message: 'Artigo não encontrado' })
            }
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },

    async update(req, res) {
        try {
            const updated = await Artigo.update(req.body, {
                where: { id: req.params.id }
            })
            if (updated) {
                const updatedArtigo = await Artigo.findByPk(req.params.id)
                res.status(200).send(updatedArtigo)
            } else {
                res.status(404).send({ message: 'Artigo não foi atualizado!' })
            }
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    
    async delete(req, res) {
        try {
            const deleted = await Artigo.destroy({ where: { id: req.params.id } });
            if (deleted) {
                res.status(200).send({ message: 'Artigo deletado com sucesso!' });
            } else {
                res.status(404).send({ message: 'Artigo não encontrado!' });
            }
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
}