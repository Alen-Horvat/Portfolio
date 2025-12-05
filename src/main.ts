import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {provideRouter, Routes} from '@angular/router';
import {Portfolio} from './app/Components/portfolio/portfolio';
import {Pagenotfound} from './app/Components/pagenotfound/pagenotfound';
import {HttpClient, provideHttpClient} from '@angular/common/http';



bootstrapApplication(App,{
  providers:[
    provideHttpClient(),


    // importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryData))
  ]
}).catch((err)=>console.error(err))
