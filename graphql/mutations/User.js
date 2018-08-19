const GraphQL = require('graphql');
var validator = require('validator');

const auth = require('../../middleware/auth');


const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList
} = GraphQL;

const UserType = require('../types/User');
const UserResolver = require('../resolvers/User');


module.exports = {

    login() {
        return {
            type: UserType,
            description: 'Authenticate a user',

            args: {
                email: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Email cannot be empty',
                },
                password: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Password cannot be empty',
                }
            },
            resolve(parent, fields) {
                return UserResolver.authenticate(fields);
            }
        }
    },

    create() {
        return {
            type: UserType,
            description: 'Add new User',

            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter full name, Cannot be empty',
                },
                email: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter email',
                },
                password: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Enter password',
                }
            },
            resolve(parent, fields) {
                if (!validator.isEmail(fields.email)) {
                    throw new Error("Invalid email!");
                }

                if (!validator.isLength(fields.password, {min: 8, max: undefined})) {
                    throw new Error("Your password should be greater 8 characters!");
                }

                return UserResolver.create(fields);
            }
        }
    }

};
