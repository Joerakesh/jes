const express = require("express");

const {
    registerDevice,
    getDevices,
    getDeviceById,
    getDeviceStatus,
    heartbeatDevice
} = require("../controllers/device.controller");

const router = express.Router();

router.post("/register", registerDevice);

router.post("/:id/heartbeat", heartbeatDevice);

router.get("/", getDevices);

router.get("/:id/status", getDeviceStatus);

router.get("/:id", getDeviceById);

module.exports = router;