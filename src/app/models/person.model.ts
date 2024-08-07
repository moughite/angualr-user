export class Person{
    constructor(
        public id:number,
        public firstName:string,
        public lastName:string,
        public adresse: string,
        public drink:string,
        public hobbies?:string[]
    ){

    }
}