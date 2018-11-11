// let comments = require("../comments");
// let products = require("../products");
// let vehicles = require("../vehicles");
const VehicleModel = require("../Models/VehicleModel");

module.exports.list = (req, res) => {
    VehicleModel.find({}).exec().then(vehicles => {
        return res.json(vehicles);
    });
};
module.exports.show = function show(req, res, next) {
    VehicleModel.findById(req.params.id).exec().then(vehicle => {
        return res.json(vehicle)
    });
};
module.exports.create = function create(req, res) {
    // let newContact = req.body
    // contacts.push(newContact);
    // res.json(newContact);
    const newVehicle = new VehicleModel(req.body)
    newVehicle.save().then(vehicle => {
        return res.json(vehicle)
    })
};
module.exports.update = function update(request, response) {
    return response.json({ theId: request.params.id });
}
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }

