import axios from 'axios';

const client = axios.create({
    timeout: 1000000,
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
    },
});

client.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => Promise.reject(error),
);
client.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => Promise.reject(error),
);

export default client;
