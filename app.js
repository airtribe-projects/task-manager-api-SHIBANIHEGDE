const express = require("express");
const app = express();

app.use(express.json());

const taskRoutes = require("./routes/TaskRoutes");
app.use("/tasks", taskRoutes);

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on 3000");
  });
}
