import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeBodyComponent } from './home-body/home-body.component'
import { AboutBodyComponent } from './about-body/about-body.component'
import { ContactBodyComponent } from './contact-body/contact-body.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeBodyComponent },
  { path: 'about', component: AboutBodyComponent },
  { path: 'contact', component: ContactBodyComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
