import { generateId } from "../utils/GenerateId"

class FakeDb {
    burgers = [{}]
}

export const fakeDb = new FakeDb()