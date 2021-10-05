module.exports = {
    settings: {
        cors: {
            enabled: true,
            expose: "AMP-Access-Control-Allow-Source-Origin",
            expose: ['Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin'],
            maxAge: 31536000,
            methods: ['GET', 'HEAD'],
            headers: [
                'Content-Type',
                'AMP-Access-Control-Allow-Source-Origin',
                'Access-Control-Allow-Headers',
                'Access-Control-Allow-Origin',
            ],
        },
    },
};