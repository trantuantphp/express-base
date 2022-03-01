import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Gateway - API Document',
            version: '1.0.0',
        },
        // servers: [
        //     {
        //         url: 'https://crm-dev.9prints.com/api/v1',
        //         description: 'Dev',
        //     },
        // ],
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                BearerAuth: [],
            },
        ],
    },
    apis: ['./src/documents/*.yml'],
};

const ApiDocument = swaggerJsdoc(options);
export default ApiDocument;
