import { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLInputObjectType } from "graphql";

export const OwnerType = new GraphQLObjectType({
    name: 'OwnerType',
    description: 'Owner list',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString }
    }
});