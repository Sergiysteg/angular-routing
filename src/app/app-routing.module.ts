import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hm1Component } from './pages/hw1/hm1.component';
import { Hw2Component } from './pages/hw2/hw2.component';
import { Hw3Component } from './pages/hw3/hw3.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cenzor', component: Hm1Component },
  { path: 'user', component: Hw2Component },
  { path: 'task', component: Hw3Component },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
