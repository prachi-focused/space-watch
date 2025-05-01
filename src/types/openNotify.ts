export interface PeopleInSpaceResponse {
    message: string;
    number: number;
    people: AstronautInfo[]
}
interface AstronautInfo {
    name: string;
    craft: string;
}

export interface IssLocationResponse {
    message: string;
    timeStamp: number;
    iss_position: IssPosition;
}
interface IssPosition {
    latitude: string;
    longitude: string;
}
