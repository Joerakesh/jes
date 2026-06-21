const axios = require("axios");
const agent = require("../config/agent");

const registerDevice = async () => {
    try {
        const response = await axios.post(
            `${process.env.CLOUD_API_URL}/devices/register`,
            {
                id: agent.id,
                name: process.env.DEVICE_NAME || agent.name,
                hostname: agent.hostname,
                platform: agent.platform,
                arch: agent.arch,
                version: agent.version,
            }
        );

        console.log(
            `✓ Registered device: ${response.data.name}`
        );
    } catch (error) {
        console.error(
            "Failed to register device"
        );

        console.error(error.message);
    }
};

module.exports = registerDevice;