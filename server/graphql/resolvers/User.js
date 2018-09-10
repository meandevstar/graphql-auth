const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const includeAccessToken = (user) => {
    const payload = {id: user.id, name: user.name};
    let userObject = user.toJSON();
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
    userObject['token'] = token;

    return userObject;
};

class UserController {

    constructor(model) {
        this.model = User;
    }

    authenticate(options) {
        return this.model.findOne({email: options.email})
            .exec()
            .then((user) => {

                if (!user) {
                    return new Error('Invalid login credentials.');
                }

                if (bcrypt.compareSync(options.password, user.password)) {
                    return includeAccessToken(user);
                } else {
                    return new Error('Invalid login credentials.');
                }

            })
            .catch(error => {
                return error;
            });

    }

    index() {
        return this.model.find()
            .sort('createdAt')
            .exec();
    }

    single(options) {
        return this.model.findOne({_id: options.id})
            .exec();
    }

    create(data) {
        const record = new this.model(data);
        return record.save()
            .then(includeAccessToken)
            .catch((error) => {
                return error;
            });
    }
};

const user_controller = new UserController();
module.exports = user_controller;
