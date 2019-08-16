import { GraphQLList, GraphQLObjectType } from "graphql";
import { OwnerType } from "./types";
import data from "../../data/owner.json";

const OnwerQueryType = new GraphQLObjectType({
    name: 'OnwerQueryType',
    description: 'Query Schema for OwnerType',
    fields: {
        owners: {
            type: new GraphQLList(OwnerType),
            resolve: () => data.Owner
        }
    }
});

export default OnwerQueryType;