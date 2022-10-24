export type UserReqDTO = {
    name: string,
    delivery_date: string
}
export interface UserDTO {
    id: string,
    name: string,
    delivery_date: string
}
export class User {
    constructor(
        private id: string,
        private name:string,
        private delivery_date:string
    ){}
    public getId = () => {
        return this.id
    }
    public getName = () => {
        return this.name
    }
    public getDeliveryDate = () => {
        return this.delivery_date
    }
}