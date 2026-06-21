const swaggerJsdoc = require("swagger-jsdoc");

module.exports = swaggerJsdoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "JES Agent API",
            version: "0.1.0-alpha",
            description: "JES Agent REST API",
        },
        servers: [
            {
                url: "http://localhost:5050",
            },
        ],
    },
    apis: ["./src/routes/*.js"],
});