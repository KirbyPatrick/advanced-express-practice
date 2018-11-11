const express = require("express");
const bodyParser = require("body-parser");
const ContactRoutes = require("./routes/ContactRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");
const CommentRoutes = require("./routes/CommentRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://test1:PasswordTest1@ds157853.mlab.com:57853/expresspractice");

//make server listen to port 3001
app.listen(PORT, () => {
    console.log(`The server is listening to port ${PORT}`);
})

//Added body parser middleware
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);

app.listen(3002, (err) => {
    if (err) {
        return console.log("Error", err);
    }
});
// app.get('/contacts', (req, res, next) => {
//     res.json(contacts);
// });

// app.get('/contacts/:id', (req, res, next) => {
//         const foundContacts = contacts.find(contact => contact._id == req.params.id);
//         res.json(foundContacts);
//     });

// app.post('/contacts', (req, res) => {
//     let newContact = req.body
//     contacts.push(newContact);
//     res.json(newContact);
// });

// app.put('/contacts', (req, res, next) => {

// })

// app.get('/vehicles', (req, res, next) => {
//     res.json(vehicles);
// });


// app.get('/comments', (req, res, next) => {
//     res.json(comments);
// });

// app.get('/products', (req, res, next) => {
//     res.json(products);
// });

// express route to retrieve from vehicles.js by id number using find() method
// app.get('/vehicles/:id', (req, res, next) => {
//     const foundVehicles = vehicles.find(car => car._id == req.params.id);
//     res.json(foundVehicles);
// });


// app.get('/comments/:id', (req, res, next) => {
//     const foundComments = comments.find(comment => comment._id == req.params.id);
//     res.json(foundComments);
// });

// app.get('/products/:id', (req, res, next) => {
//     const foundProducts = products.find(product => product._id == req.params.id);
//     res.json(foundProducts);
// });



//Create express routes to create one thing


// app.post('/vehicles', (req, res) => {
//     let newVehicle = req.body
//     vehicles.push(newVehicle);
//     res.json(newVehicle);
// });


// app.post('/comments', (req, res) => {
//     let newComments = req.body
//     comments.push(newComments);
//     res.json(newComments);
// });

// app.post('/products', (req, res) => {
//     let newProduct = req.body
//     products.push(newProduct);
//     res.json(newProduct);
// });