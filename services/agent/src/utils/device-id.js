const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const DEVICE_FILE = path.join(
    process.cwd(),
    "data",
    "device.json"
);

function getDeviceId() {
    if (fs.existsSync(DEVICE_FILE)) {
        const data = JSON.parse(
            fs.readFileSync(DEVICE_FILE)
        );

        return data.id;
    }

    const id = uuidv4();

    fs.writeFileSync(
        DEVICE_FILE,
        JSON.stringify(
            {
                id,
            },
            null,
            2
        )
    );

    return id;
}

module.exports = getDeviceId;