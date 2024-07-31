const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You send the wrong input",
    });
    return;
  }
});

app.get("/todos", (req, res) => {});
app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You send the wrong input",
    });
    return;
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
