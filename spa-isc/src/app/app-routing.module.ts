import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ServersComponent } from './component/servers/servers.component';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactComponent } from './component/contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'serves', component: ServersComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  { path: 'Page', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
