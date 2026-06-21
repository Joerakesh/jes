require("dotenv").config();

const express = require("express");
const cors = require("cors");

const healthRoute = require("./routes/health");
const systemRoute = require("./routes/system");
const dockerRoute = require("./routes/docker");
const agentRoute = require("./routes/agent");
const registerDevice = require("./services/register");
const sendHeartbeat = require("./services/heartbeat");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();

app.use(cors());
app.use(express.json());

registerDevice();
setInterval(() => {
    sendHeartbeat();
}, 30000);

app.use("/health", healthRoute);
app.use("/system", systemRoute);
app.use("/docker", dockerRoute);
app.use("/agent", agentRoute);
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`JES Agent running on ${PORT}`);
});

