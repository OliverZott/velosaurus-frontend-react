export interface Tour {

    id: string,
    tourName: string,
    date: string,
    length: number,
    altitudeGain: number,
    tourType: TourType
    description: string,
}

export enum TourType {
    MountainBike,
    Nordic,
    Ski
}