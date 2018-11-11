// let comments = require("../comments");
// let products = require("../products");
// let vehicles = require("../vehicles");
const CommentModel = require("../Models/CommentModel");

module.exports.list = (req, res) => {
    CommentModel.find({}).exec().then(comments => {
        return res.json(comments);
    });
};
module.exports.show = function show(req, res, next) {
    CommentModel.findById(req.params.id).exec().then(comment => {
        return res.json(comment)
    });
};
module.exports.create = function create(req, res) {
    // let newContact = req.body
    // contacts.push(newContact);
    // res.json(newContact);
    const newComment = new CommentModel(req.body)
    newComment.save().then(comment => {
        return res.json(comment)
    })
};
module.exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }

