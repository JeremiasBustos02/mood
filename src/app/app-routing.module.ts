import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoodInstrumentsComponent } from './components/instruments-components/mood-instruments/mood-instruments.component';
import { MoodAboutComponent } from './components/about-component/mood-about/mood-about.component';
import { HomeComponent } from './components/home-components/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'instruments',
    component: MoodInstrumentsComponent
  },
  {
    path: 'about',
    component: MoodAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
