const axios = require("axios");
const agent = require("../config/agent");

const sendHeartbeat = async () => {
    try {
        await axios.post(
            `${process.env.CLOUD_API_URL}/devices/${agent.id}/heartbeat`
        );

        console.log("Heartbeat sent");
    } catch (error) {
        console.error("Heartbeat failed");
    }
};

module.exports = sendHeartbeat;