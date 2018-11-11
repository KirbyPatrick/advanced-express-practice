// let comments = require("../comments");
// let products = require("../products");
// let vehicles = require("../vehicles");
const ContactModel = require("../Models/ContactModel");

module.exports.list = (req, res) => {
  ContactModel.find({}).exec().then(contacts => {
    return res.json(contacts)
  });
};
module.exports.show = function show(req, res, next) {
  ContactModel.findById(req.params.id).exec().then(contact => {
    return res.json(contact)
  });
};
module.exports.create = function create(req, res) {
  // let newContact = req.body
  // contacts.push(newContact);
  // res.json(newContact);
  const newContact = new ContactModel(req.body)
  newContact.save().then(contact => {
    return res.json(contact)
  })
};
module.exports.update = function update(request, response) {
  return response.json({ theId: request.params.id });
}
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }

