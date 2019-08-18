import { GraphQLList, GraphQLObjectType, GraphQLInt, GraphQLNonNull } from "graphql";
import { OwnerType, PetType, OwnerPetType } from "./types";
import data from "../../data/data.json";
import _ from "lodash";

const OnwerQueryType = new GraphQLObjectType({
    name: 'OnwerQueryType',
    description: 'Query Schema for OwnerType',
    fields: {
        owners: {
            type: new GraphQLList(OwnerType),
            resolve: () => data.Owner
        },
        pets: {
            type: new GraphQLList(PetType),
            resolve: () => data.Pets
        },
        owner: {
            type: OwnerType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function (source, args) {
                return _.find(data.Owner, { id: args.id });
            }
        },
        ownerpet: {
            type: OwnerPetType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function (source, args) {
                return _.find(data.Owner, { id: args.id });
            }
        }
    }
});

export default OnwerQueryType;