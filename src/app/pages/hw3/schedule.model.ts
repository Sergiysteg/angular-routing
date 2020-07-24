import { ISchedule } from './schedule.interface';

export class Schedule implements ISchedule {
    constructor(public id: number,
                public taskName: string,
                public check: boolean = false,
                public edit: boolean = false){}
}