
import { fakeDb } from "../db/FakeDB";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class DogsService {
    delete(id) {
        let value = fakeDb.dogs.find(e => e.id === id)
        if (!value) {
            throw new BadRequest("Invalid Id Casting Failed");
        }
        fakeDb.dogs = fakeDb.dogs.filter(s => s.id !== id)
    }
    create(newDog) {
        newDog.id = generateId()
        // other buisness logic

        fakeDb.dogs.push(newDog)
        return newDog
    }
    async find(query = {}) {
        // let values = await dbContext.Values.find(query);
        return fakeDb.dogs;
    }
    async findById(id) {
        let value = fakeDb.dogs.find(e => e.id === id)
        if (!value) {
            throw new BadRequest("Invalid Id Casting Failed");
        }
        return value;
    }
}

export const dogsService = new DogsService();