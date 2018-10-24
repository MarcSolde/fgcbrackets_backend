import {ObjectId} from "mongodb";
import {GameType} from "../enumeration/game.enumeration"

export interface TournamentModel {
    _id: ObjectId;
    name: String;
    seed: seedType;
    startDate: Date;
    endDate: Date;
    game: GameType;
    type: TournamentType;
    comments: String;
    players: Player[];
    bracket: Bracket;

}