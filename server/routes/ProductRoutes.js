const express = require("express");
const router = express.Router();
const { list, show, create, update, remove } = require("../controllers/ProductController");
router.get("/products", list);
router.get("/products/:id", show);
router.post("/products", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router; 