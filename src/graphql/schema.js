import { GraphQLSchema } from "graphql";
import OnwerQueryType from "./queries";

const OwnerSchema = new GraphQLSchema({
    query: OnwerQueryType,
});

export default OwnerSchema;