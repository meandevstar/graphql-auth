const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLSchema,
} = GraphQL;


const UserQuery = require('./queries/User');
const UserMutation = require('./mutations/User');


const RootQuery = new GraphQLObjectType({
	name: 'Query',
	fields: {
		users: UserQuery.index(),
		user: UserQuery.single(),
		me: UserQuery.me(),
	},
});


const RootMutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
        login: UserMutation.login(),
		register: UserMutation.create(),
	},
});



module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
});

