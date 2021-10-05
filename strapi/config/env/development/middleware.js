module.exports = {
    settings: {
        cors: {
            enabled: true,
            expose: "AMP-Access-Control-Allow-Source-Origin",
            expose: ['WWW-Authenticate', 'Server-Authorization', 'Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin'],
            maxAge: 31536000,
            credentials: true,
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
            headers: [
                'Content-Type',
                'Authorization',
                'X-Frame-Options',
                'Origin',
                'AMP-Access-Control-Allow-Source-Origin',
                'Access-Control-Allow-Headers',
                'Access-Control-Allow-Origin',
            ],
        },
    },
};