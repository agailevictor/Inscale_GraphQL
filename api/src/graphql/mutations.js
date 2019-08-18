import { GraphQLObjectType, GraphQLNonNull } from "graphql";
import { PetType, PetCreateType, PetUpdateType } from "./types";
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
        },
        updatePet: {
            type: PetType,
            args: {
                input: { type: new GraphQLNonNull(PetUpdateType) }
            },
            resolve: (source, { input }) => {
                let pet = [];
                pet.id = input.id;
                pet.name = input.name;
                pet.colour = input.colour;
                pet.age = input.age;
                pet.breed = input.breed;
                pet.ownerid = input.ownerid;
                let findId = data.Pets.findIndex(b => b.id == input.id);
                let update = data.Pets.splice(findId, 1, pet);
                return pet;
            }
        }
    }
});

export default PetMutationType;