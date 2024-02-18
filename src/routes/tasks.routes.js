const { Router } = require("express");

const { getAllPost, createPost } = require("../controllers/blog.controller");
const router = Router();

router.get("/blog", getAllPost);

router.post("/blog", createPost);

module.exports = router;
