import { inject, Injectable } from '@angular/core';
import { PostEntity } from '../../../domain/entities/post.entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostRepository {
    apiUrl = 'https://mp98fa5b12db0b91f4ee.free.beeceptor.com/posts';
    http:HttpClient = inject(HttpClient);
    getAll():Observable<PostEntity[]> {
        return this.http.get<PostEntity[]>(this.apiUrl);
    }
}