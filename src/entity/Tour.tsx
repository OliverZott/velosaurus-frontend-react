export class Tour {

    constructor(
        public id: string = '',
        public tourName: string = '',
        public date: string = '',
        public length: number = 0,
        public altitudeGain: number,
        public tourType: TourType
        // public summary: string = '',
    ) { }

}

export enum TourType {
    MountainBike,
    Nordic,
    Ski
}