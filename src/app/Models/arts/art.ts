import { StringLiteral } from "typescript";
import { Company } from "../companies/company";

export class Art {
    IdArt: number;
    ArtName: String;
    Description: string;
    ImageURL: string;
    IdCompany: number;
    State: boolean;
    UserCreate: string;
    CreateDate: Date;
    UserModified: string;
    ModifiedDate: Date;
    Company: Array<Company>;
}
