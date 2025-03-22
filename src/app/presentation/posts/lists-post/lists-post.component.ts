import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ReactiveFormsModule, 
  FormsModule, 
  FormGroup, 
  FormBuilder,
  Validators
} from '@angular/forms';
import { ReversePipe } from '../../../shared/pipes/reverse.pipe';


@Component({
  selector: 'app-lists-post',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    FormsModule,
    CommonModule,
    ReversePipe],
  templateUrl: './lists-post.component.html',
  styleUrl: './lists-post.component.scss'
})
export class ListsPostComponent {
  @Input() userPost:any[] = [];
  likedPosts: Set<number> = new Set();
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      post: ['', Validators.required]
    });
  }
  likePost(postId: number):void {
    if(this.likedPosts.has(postId)){
      this.likedPosts.delete(postId);
    }else{
      this.likedPosts.add(postId);
    }
  }
  addPost(postId: number):void{
    const postMessage = this.myForm.getRawValue().post;
    let post = this.userPost.find(p => p.id === postId);
    post.comments.push({
      id: this.userPost.length + 1,
      message:postMessage
    });
    this.myForm.reset();
    /* for(let post of this.userPost){
      if(post.id == postId) {
        post.comments.add(postMessage);
      }
    } */
  }
}
