import BaseController from 'controllers/Base.controller';

class UserController extends BaseController {
    constructor() {
        super();
        this.controller_path = '/user';
        this.name = 'UserController';
        this.authentication = this.authentication.bind(this);
        this.routes = [
            {
                method: this.methods.POST,
                path: '/login',
                localMiddleware: [],
                handler: this.authentication,
            },
        ];
    }

    authentication(req, res) {
        try {
            const { body } = req;
            return this._success(res, body, this.getFunctionPath());
        } catch (error) {
            console.error(`${this.getFunctionPath()} error: `, error);
            return this._serverError(res, error.message);
        }
    }
}

export default UserController;
