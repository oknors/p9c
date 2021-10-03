module.exports = {
    settings: {
        cors: {
            enabled: true,
            headers: "*",
            origin:"*",
            expose: ["AMP-Access-Control-Allow-Source-Origin", "AMP-Redirect-To"]
        }
    }
};