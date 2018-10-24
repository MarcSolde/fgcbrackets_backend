import {TournamentModel} from "../model/tournament.model"
import {MongoClient} from "mongodb"
import {mongoURL} from "../constants";
class TournamentLogic {
    public static getTournament = async (id: string): Promise<TournamentModel>  => {
        const dbClient = new MongoClient(mongoURL);
        dbClient.connect
        return ret;
    }
}

export {TournamentLogic};