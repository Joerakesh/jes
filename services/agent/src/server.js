const express = require("express");
const cors = require("cors");

const healthRoute = require("./routes/health");
const systemRoute = require("./routes/system");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoute);
app.use("/system", systemRoute);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`JES Agent running on port ${PORT}`);
});