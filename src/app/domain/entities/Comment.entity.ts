

export class CommentEntity {
    id:number;
    message:string;
    constructor(
        id:number = 0,
        message:string = ''
    ){
        this.id = id;
        this.message = message;
    }
}