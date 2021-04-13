import { dogsService } from "../services/DogsService";
import BaseController from "../utils/BaseController";

export class DogsController extends BaseController {
    constructor() {
        super("api/dogs")
        this.router
            .get("", this.getAll)
            // the :id defines that whatever is in that position within the url will be treated as a varaible called id
            // it will be available on req.params.VARIABLE NAME
            .get("/:id", this.getOne)
            .post("", this.create)

            .delete("/:id", this.delete)
    }
    async getAll(_, res, next) {
        try {
            const values = await dogsService.find()
            return res.send(values);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            const values = await dogsService.findById(req.params.id)
            return res.send(values);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            // send req.body where the data exists to the service
            let data = await dogsService.create(req.body)
            res.send(data);
        } catch (error) {
            next(error);
        }
    }


    async delete(req, res, next) {
        try {
            let data = await dogsService.delete(req.params.id)
            res.send("<h1>Meow!</h1>")
        } catch (error) {
            next(error)
        }
    }
}