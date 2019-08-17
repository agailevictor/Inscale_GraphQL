import { GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLInputObjectType } from "graphql";

export const OwnerType = new GraphQLObjectType({
    name: 'OwnerType',
    description: 'Owner Type',
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
    description: 'Pet Type',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        colour: { type: GraphQLString },
        age: { type: GraphQLInt },
        breed: { type: GraphQLString },
        ownerid: { type: GraphQLInt }
    }
});

export const PetCreateType = new GraphQLInputObjectType({
    name: 'PetCreateType',
    description: 'Add a Pet to the list',
    type: PetType,
    fields: {
        name: { type: GraphQLString },
        colour: { type: GraphQLString },
        age: { type: GraphQLInt },
        breed: { type: GraphQLString },
        ownerid: { type: GraphQLInt }
    }
});