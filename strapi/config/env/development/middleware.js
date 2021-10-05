module.exports = {
    settings: {
        cors: {
            enabled: true,
            headers: "*",
            origin:"*",
            expose: "AMP-Access-Control-Allow-Source-Origin",
        }
    }
};



module.exports = {
    settings: {
        cors: {
            enabled: true,
            origin: '*',
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
                'access-control-allow-origin',
            ],
        },
    },
};