// let comments = require("../comments");
// let products = require("../products");
// let vehicles = require("../vehicles");
const ProductModel = require("../Models/ProductModel");

module.exports.list = (req, res) => {
    ProductModel.find({}).exec().then(products => {
        return res.json(products);
    });
};
module.exports.show = function show(req, res, next) {
    ProductModel.findById(req.params.id).exec().then(product => {
        return res.json(product)
    });
};
module.exports.create = function create(req, res) {
    // let newContact = req.body
    // contacts.push(newContact);
    // res.json(newContact);
    const newProduct = new ProductModel(req.body)
    newProduct.save().then(product => {
        return res.json(product)
    })
};
module.exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }

