
import { fakeDb } from "../db/FakeDB";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class CatsService {
    delete(id) {
        let value = fakeDb.cats.find(e => e.id === id)
        if (!value) {
            throw new BadRequest("Invalid Id Casting Failed");
        }
        fakeDb.cats = fakeDb.cats.filter(s => s.id !== id)
    }
    create(newCat) {
        newCat.id = generateId()
        // other buisness logic

        fakeDb.cats.push(newCat)
        return newCat
    }
    async find(query = {}) {
        // let values = await dbContext.Values.find(query);
        return fakeDb.cats;
    }
    async findById(id) {
        let value = fakeDb.cats.find(e => e.id === id)
        if (!value) {
            throw new BadRequest("Invalid Id Casting Failed");
        }
        return value;
    }
}

export const catsService = new CatsService();