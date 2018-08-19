const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
} = GraphQL;



const UserType = new GraphQL.GraphQLObjectType({
	name: 'User',
	description: 'User type for managing all the users in our application.',

	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'ID of the user, Generated automatically by MongoDB',
		},
		name: {
			type: GraphQLString,
			description: 'Full name of the user',
		},
        gender: {
			type: GraphQLString,
			description: 'Gender of the user',
		},
		picture: {
			type: GraphQLString,
			description: 'Profile picture of the user',
		},

		email: {
			type: GraphQLString,
			description: 'Email address of the user, must be valid and unique',
		},

		token: {
			type: GraphQLString,
			description: 'Resolved token',
		},

		createdAt: {
			type: GraphQLString,
			description: 'Generate system to allow user to have secure resource access',
		},
		
		updatedAt: {
			type: GraphQLString,
			description: 'Date and time when this users account was last updated',
		}

	})

});


module.exports = UserType;

