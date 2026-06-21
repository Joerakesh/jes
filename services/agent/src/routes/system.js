const express = require("express");
const si = require("systeminformation");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const [
            cpuLoad,
            memory,
            battery,
            filesystem,
            network
        ] = await Promise.all([
            si.currentLoad(),
            si.mem(),
            si.battery(),
            si.fsSize(),
            si.networkStats()
        ]);

        res.json({
            cpu: {
                usage: cpuLoad.currentLoad.toFixed(2)
            },

            memory: {
                total: memory.total,
                used: memory.used,
                usage: ((memory.used / memory.total) * 100).toFixed(2)
            },

            battery: {
                percent: battery.percent,
                charging: battery.isCharging
            },

            disk: filesystem.map(disk => ({
                fs: disk.fs,
                used: disk.used,
                size: disk.size,
                usage: disk.use
            })),

            network: network
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to fetch system information"
        });
    }
});

module.exports = router;