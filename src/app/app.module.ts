import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentListComponent } from './components/instruments-components/instrument-list/instrument-list.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoodAboutComponent } from './components/about-component/mood-about/mood-about.component';
import { MoodInstrumentsComponent } from './components/instruments-components/mood-instruments/mood-instruments.component';
import { CartComponent } from './components/instruments-components/cart/cart.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';
import { AboutFormComponent } from './components/about-component/about-form/about-form.component';
import { AboutCommentListComponent } from './components/about-component/about-comment-list/about-comment-list.component';
import { HomeComponent } from './components/home-components/home.component';


@NgModule({
  declarations: [
    AppComponent,
    InstrumentListComponent,
    MoodAboutComponent,
    MoodInstrumentsComponent,
    CartComponent,
    InputIntegerComponent,
    AboutFormComponent,
    AboutCommentListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
