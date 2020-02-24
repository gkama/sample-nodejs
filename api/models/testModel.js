const uuid = require("uuid");

class Model {
    constructor(id, name, details, publicKey) {
        this.id = id
        this.name = name
        this.details = details
        this.publicKey = publicKey
    }
}

exports.TestModel = new Model(9009, "Finance", "finance|financial", uuid.v4())

exports.Models = [
    new Model(1, "test 1", "testing model 1", "67788325-1671-40a0-b0dc-304ce207b81f"),
    new Model(2, "test 2", "testing model 2", "e84a4b1f-3bbd-4906-917b-2160ca09906f"),
    new Model(3, "test 3", "testing model 3", "7f8a84f3-995c-49df-9e77-1916fabd0678"),
]