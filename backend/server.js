const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

/* MIDDLEWARE */

app.use(cors({
    origin: "*"
}));
app.use(express.json());

/* ROUTES */

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

/* TEST ROUTE */

app.get("/", (req, res) => {
    res.send("Task Manager API Running...");
});

/* DATABASE */

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

/* SERVER */

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});