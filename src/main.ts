import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {provideRouter, Routes} from '@angular/router';
import {Portfolio} from './app/Components/portfolio/portfolio';
import {Pagenotfound} from './app/Components/pagenotfound/pagenotfound';
import {HttpClient, provideHttpClient} from '@angular/common/http';

const routes: Routes = [
  {path:'', redirectTo: '/portfolio', pathMatch:'full'},
  {path:'portfolio', component: Portfolio},
  {path:'**', loadComponent:()=> import('./app/Components/pagenotfound/pagenotfound').then(m=>m.Pagenotfound)}
]

bootstrapApplication(App,{
  providers:[
    provideHttpClient(),
    provideRouter(routes),
    // importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryData))
  ]
}).catch((err)=>console.error(err))
