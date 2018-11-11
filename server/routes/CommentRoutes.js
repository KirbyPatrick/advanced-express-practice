const express = require("express");
const router = express.Router();
const { list, show, create, update, remove } = require("../controllers/CommentController");
router.get("/comments", list);
router.get("/comments/:id", show);
router.post("/comments", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router; 