import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, BeersComponent, AboutComponent } from 'src/app/pages/index';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'beers', component: BeersComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'beers/ale', loadChildren: './pages/beers/beers.component#aleModule' },
  // { path: 'beers/lager', loadChildren: './pages/beers/beers.component#lagerModule' },
  // { path: 'beers/pilsen', loadChildren: './pages/beers/beers.component#pilsenModule' },
  // { path: 'beers/pale', loadChildren: './pages/beers/beers.component#paleModule' },
  // { path: 'beers/weissbier', loadChildren: './pages/beers/beers.component#weissbierModule' },
  { path: 'beers/ale', component: BeersComponent },
  { path: 'beers/lager', component: BeersComponent },
  { path: 'beers/pilsen', component: BeersComponent },
  { path: 'beers/pale', component: BeersComponent },
  { path: 'beers/weissbier', component: BeersComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }