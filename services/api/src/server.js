require("./jobs/offlineDetection");

const express = require("express");
const cors = require("cors");

const deviceRoutes = require("./routes/device");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        service: "jes-api",
    });
});

app.use("/devices", deviceRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`JES API running on port ${PORT}`);
});