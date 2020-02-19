import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { HomeComponent } from './component/home/home.component';
import { ServersComponent } from './component/servers/servers.component';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactComponent } from './component/contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {index: 0}},
  {path: 'serves', component: ServersComponent, data: {index: 1}},
  {path: 'about', component: AboutComponent, data: {index: 2}},
  {path: 'blog', component: BlogComponent, data: {index: 3}},
  { path: 'Page', component: ContactComponent, data: {index: 4}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
