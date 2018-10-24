import {Request,  Response, Router } from "express";
import {TournamentLogic} from "../logic/tournament.logic";
export class TournamentRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public getRouter(): Router {
        return this.router;
    }

    public async getTournament(req: Request, res: Response) {
        try {
            const tid = req.params.id;
            const tournament = await TournamentLogic.getTournament(tid);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal error"});
        }
    }

    public init() {
        this.router.get("/tournament/:id", this.getTournament);
    }

}