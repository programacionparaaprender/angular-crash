import { Routes } from '@angular/router';
import { PostsComponent } from './presentation/posts/posts/posts.component';
import { ProfileComponent } from './presentation/profile/profile.component';

export const routes: Routes = [
    { path: '' , component: PostsComponent},
    { path: 'posts' , component: PostsComponent},
    { path: 'profile' , component: ProfileComponent},
];
