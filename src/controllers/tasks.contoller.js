const pool = require("../db");

const getAllTasks = async (req, res, next) => {
  try {
    const allTask = await pool.query("SELECT * FROM task");
    res.send(allTask.rows);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title,description) VALUES($1,$2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTasks, createTask };
