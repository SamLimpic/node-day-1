import { generateId } from "../utils/GenerateId"

class FakeDb {
    burgers = [{
        "name": "westernBacon",
        "ingredients": ["bacon", "cheddar", "onions", "bbq"],
        "price": 7,
        "id": generateId()
    }]

    cats = [{
        "name": "Smudgins",
        "age": 4,
        "size": "smol",
        "id": generateId()
    }]

    dogs = [{
        "name": "Spicy Jovaliah",
        "age": 8,
        "size": "medium",
        "id": generateId()
    }]
}

export const fakeDb = new FakeDb()