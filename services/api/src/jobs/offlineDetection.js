const cron = require("node-cron");
const prisma = require("../lib/prisma");

cron.schedule("* * * * *", async () => {
    const cutoff = new Date(Date.now() - 90 * 1000);

    await prisma.device.updateMany({
        where: {
            lastSeen: {
                lt: cutoff,
            },
        },
        data: {
            isOnline: false,
        },
    });

    console.log("Offline detection executed");
});