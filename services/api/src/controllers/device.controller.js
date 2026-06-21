const prisma = require("../lib/prisma");

const registerDevice = async (req, res) => {
    try {
        const {
            id,
            name,
            hostname,
            platform,
            arch,
            version,
        } = req.body;

        const device = await prisma.device.upsert({
            where: {
                id,
            },
            update: {
                name,
                hostname,
                platform,
                arch,
                version,
                isOnline: true,
                lastSeen: new Date(),
            },
            create: {
                id,
                name,
                hostname,
                platform,
                arch,
                version,
                isOnline: true,
                lastSeen: new Date(),
            },
        });

        res.status(200).json(device);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to register device",
        });
    }
};

const getDevices = async (req, res) => {
    try {
        const devices = await prisma.device.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        res.json(devices);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to fetch devices",
        });
    }
};

const getDeviceById = async (req, res) => {
    try {
        const { id } = req.params;

        const device = await prisma.device.findUnique({
            where: { id },
        });

        if (!device) {
            return res.status(404).json({
                error: "Device not found",
            });
        }

        res.json(device);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to fetch device",
        });
    }
};

const getDeviceStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const device = await prisma.device.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                hostname: true,
                platform: true,
                version: true,
                isOnline: true,
                lastSeen: true,
            },
        });

        if (!device) {
            return res.status(404).json({
                error: "Device not found",
            });
        }

        res.json({
            online: device.isOnline,
            lastSeen: device.lastSeen,
            hostname: device.hostname,
            platform: device.platform,
            version: device.version,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to fetch status",
        });
    }
};
const heartbeatDevice = async (req, res) => {
    try {
        const { id } = req.params;

        const device = await prisma.device.update({
            where: { id },
            data: {
                isOnline: true,
                lastSeen: new Date(),
            },
        });

        res.json({
            success: true,
            lastSeen: device.lastSeen,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Heartbeat failed",
        });
    }
};
module.exports = {
    registerDevice,
    getDevices,
    getDeviceById,
    getDeviceStatus,
    heartbeatDevice
};