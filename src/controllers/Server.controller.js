class Server {
    app = null;
    port = null;
    db = [];
    constructor(app, port, db = []) {
        this.app = app;
        this.port = port;
        this.db = db;
    }
    async connectDB() {
        try {
            if (this.db.length < 1) {
                console.log('No DB connection');
                return true;
            }
            for (let i = 0; i < this.db.length; i++) {
                const _db = this.db[i];
                if (_db.type === 'sql') {
                    await _db.instance.authenticate();
                    console.log('Connection to SQL has been established successfully');
                }
                if (_db.type === 'no_sql') {
                    await _db.instance();
                    console.log('Connection to NoSQL has been established successfully');
                }
            }
        } catch (error) {
            console.error('***** DB error: ', error);
            throw new Error(error.message);
        }
    }
    run() {
        try {
            return this.app.listen(this.port, () => console.log('Server is running at port: ' + this.port));
        } catch (error) {
            console.error(error);
        }
    }
    loadMiddleware(listMiddleware) {
        listMiddleware.forEach((middleware) => {
            this.app.use(middleware);
        });
    }
    loadController(listController) {
        listController.forEach((controller) => {
            this.app.use(controller.root_path + controller.controller_path, controller.setRoutes());
        });
    }
}

export default Server;
