import { GraphQLSchema } from "graphql";
import OnwerQueryType from "./queries";
import PetMutationType from "./mutations";

const OwnerSchema = new GraphQLSchema({
    query: OnwerQueryType,
    mutation: PetMutationType
});

export default OwnerSchema;