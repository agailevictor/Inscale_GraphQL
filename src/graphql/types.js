import { GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLInputObjectType } from "graphql";

export const OwnerType = new GraphQLObjectType({
    name: 'OwnerType',
    description: 'Owner list',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString }
    }
});

export const PetType = new GraphQLObjectType({
    name: 'PetType',
    description: 'Pet list',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        colour: { type: GraphQLString },
        age: { type: GraphQLInt },
        breed: { type: GraphQLString },
        ownerid: { type: GraphQLInt }
    }
});