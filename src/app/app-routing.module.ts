import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoodInstrumentsComponent } from './mood-instruments/mood-instruments.component';
import { MoodAboutComponent } from './mood-about/mood-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'instruments',
    pathMatch: 'full'
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
