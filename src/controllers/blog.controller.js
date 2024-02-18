const pool = require("../db");

const getAllPost = async (req, res, next) => {
  try {
    const allPost = await pool.query("SELECT * FROM posts");
    res.send(allPost.rows);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  const { author, title, content } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO posts (author, title, content) VALUES($1, $2, $3) RETURNING *",
      [author, title, content]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPost, createPost };
