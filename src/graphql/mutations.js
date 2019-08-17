import { GraphQLObjectType, GraphQLNonNull } from "graphql";
import { PetType, PetCreateType } from "./types";
import uuidv4 from "uuid/v4"
import data from "../../data/data.json";

const PetMutationType = new GraphQLObjectType({
    name: 'PetMutationType',
    description: 'Mutations for PetType',
    fields: {
        createPet: {
            type: PetType,
            args: {
                input: { type: new GraphQLNonNull(PetCreateType) }
            },
            resolve: (source, { input }) => {
                let pet = [];
                pet.id = uuidv4();
                pet.name = input.name;
                pet.colour = input.colour;
                pet.age = input.age;
                pet.breed = input.breed;
                pet.ownerid = input.ownerid;
                data.Pets.push(pet);
                return pet;
            }
        }
    }
});

export default PetMutationType;