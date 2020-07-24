import { IPhoneNumber } from './phone-number.interface'

export class PhoneNumber implements IPhoneNumber {
    constructor(
        public fName: string,
        public lName: string,
        public phoneNumber: string
    ){}
}
