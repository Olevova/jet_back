const express = require("express");
const cors = require("cors");
const employeeRouter = require("./route/employee.route");
const { createDatabase } = require("./db");

// Перевіряємо наявність бази даних, якщо не має то створюємо її
createDatabase()
  .then(() => console.log("DB created"))
  .catch((error) => console.error("Error:", error));

const app = express();

app.use(cors());
app.use(express.json());
app.use("/app", employeeRouter);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`its Start on ${PORT}`);
});
