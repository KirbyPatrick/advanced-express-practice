const express = require("express");
const router = express.Router();
const { list, show, create, update, remove } = require("../controllers/VehicleController");
router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router; 