export const logRequest = (req, res, next) => {
    if (req.body) {
        console.log('========== Request Body: ', req.body, ' ==========');
    }
    const defaultWrite = res.write;
    const defaultEnd = res.end;
    const chunks = [];
    res.write = (...restArgs) => {
        chunks.push(new Buffer.from(restArgs[0]));
        defaultWrite.apply(res, restArgs);
    };
    res.end = (...restArgs) => {
        if (restArgs[0]) {
            chunks.push(new Buffer.from(restArgs[0]));
        }
        const body = Buffer.concat(chunks).toString('utf8');
        try {
            console.log('========== Response Body: ', JSON.parse(body), ' ==========');
        } catch (error) {
            // console.log("========== Response Body: ", body, " ==========");
        }
        defaultEnd.apply(res, restArgs);
    };
    next();
};

export const addRaw = (req, _res, next) => {
    req.rawBody = '';
    req.on('data', (chunk) => (req.rawBody += chunk));
    next();
};
