import { Component, inject, OnInit } from '@angular/core';
import { ListsPostComponent } from '../lists-post/lists-post.component';
import { PostEntity } from '../../../domain/entities/post.entity';
import { GetPostsUseCase } from '../../../application/usecase/posts/get-posts.usecase';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ListsPostComponent],
  providers: [GetPostsUseCase],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  getPostUseCase: GetPostsUseCase = inject(GetPostsUseCase);
  posts:PostEntity[] = [
    {
      id:1,
      user: "John Doe",
      content: "Just had an amazing day at the park!",
      comments: [
        {
          id:1,
          message:"Sounds fun!"
        }, 
        {
          id:2,
          message:"Glad to hear that!"
        }
      ]
    },
    {
      id:2,
      user: "Jane Smith",
      content: "Excited about the new project launch tomorrow.",
      comments: [
        {
          id:3,
          message:"Good luck"
        }, 
        {
          id:4,
          message:"You will do great!"
        }
      ]
    }
  ]

  ngOnInit(){
    this.getPostUseCase.execute().subscribe((data) => {
      this.posts = [];
      for(let dat of data){
        let comments = [];
        let counter = 1;
        for(let comment of dat.comments){
          comments.push({
            id:counter++,
            message:comment
          });
        }
        this.posts.push({
          id:dat.id,
          user: dat.user,
          content: dat.content,
          comments: comments
        })
      }
      console.log('Posts:', this.posts);
    });
  }
}
