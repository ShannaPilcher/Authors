const Author = require('../models/author.model');

module.exports = {
    getAll: (req, res) => {
        Author.find({})
            .then((allAuthorNames) => {
                res.json(allAuthorNames)
            })
            .catch((err)=> {
                console.log("error found in getAll");
                console.log(err);
                res.json(err)
            })
    },

    getOne: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then((author) => {
                res.json(author)
            })
            .catch((err) => {
                console.log("error found in getOne")
                console.log(err)
                res.json(err)
            })
    },

    update: (req,res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then((updatedAuthor) => {
                console.log(updatedAuthor)
                res.json(updatedAuthor)
            })
            .catch((err) => {
                console.log("error found in update")
                console.log(err)
                res.json(err)
            })
    },

    create: (req, res) => {
        Author.create(req.body)
            .then((newAuthorName) => {
                res.json(newAuthorName)
            })
            .catch((err) => {
                console.log("error found in create");
                console.log(err);
                res.status(400).json(err)})
    },

    delete: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((deletedAuthor) => {
                console.log(deletedAuthor)
                res.json(deletedAuthor)
            })
            .catch((err) => {
                console.log("error found in delete")
                console.log(err)
                res.json(err)
            })
    }

}