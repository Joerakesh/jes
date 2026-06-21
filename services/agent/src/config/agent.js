const { v4: uuidv4 } = require("uuid");
const os = require("os");

const getDeviceId = require("../utils/device-id");
const AGENT_ID = getDeviceId();
module.exports = {
    id: AGENT_ID,
    name: process.env.AGENT_NAME || "JES Agent",
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    version: "0.1.0-alpha",
};