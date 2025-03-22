import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostRepository } from '../../../infraestructure/repositories/posts/post.repository';

@Injectable({
  providedIn: 'root',
})
export class GetPostsUseCase {
  private postRepository = inject(PostRepository);

  execute(): Observable<any>{
    return this.postRepository.getAll();
  }
}