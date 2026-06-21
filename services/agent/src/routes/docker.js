const express = require("express");
const Docker = require("dockerode");

const router = express.Router();

const docker = new Docker({
    socketPath: "/var/run/docker.sock",
});

router.get("/", async (req, res) => {
    try {
        const containers = await docker.listContainers({
            all: true,
        });

        const result = containers.map((container) => ({
            id: container.Id,
            name: container.Names[0]?.replace("/", ""),
            image: container.Image,
            state: container.State,
            status: container.Status,
        }));

        res.json(result);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to fetch docker containers",
        });
    }
});

module.exports = router;