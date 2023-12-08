import { Routes } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';

export const routes: Routes = [
    {path:'', redirectTo:'blog', pathMatch:'full'},
    {path:'blog', component:BlogPageComponent},
    {path:'news', component:NewsPageComponent}
];
