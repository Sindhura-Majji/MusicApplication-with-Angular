import { Guid } from 'guid-typescript';

export interface ITrack{
    mbid:Guid,
    id : number,
    name : string,
    artist : string,
    url : string,
    streamable: string,
    listeners : number
}
