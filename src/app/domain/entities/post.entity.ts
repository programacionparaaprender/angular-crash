import { CommentEntity } from "./Comment.entity";


export class PostEntity {
    id:number;
    user: string;
    content: string;
    comments: CommentEntity[];
    constructor(
        id:number = 0,
        user: string = '',
        content: string = '',
        comments: CommentEntity[] = []
    ){
        this.id = id;
        this.user = user;
        this.content = content;
        this.comments = comments;
    }
}