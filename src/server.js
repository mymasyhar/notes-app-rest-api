import Hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
    const server = Hapi.server({
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        port: 8000,
        "routes": {
            "cors": {
                "origin" : ["*"],
            },
        },
    })
    server.route(routes);
    await server.start();
    console.log(`server running at : ${server.info.uri}`);
}

init();